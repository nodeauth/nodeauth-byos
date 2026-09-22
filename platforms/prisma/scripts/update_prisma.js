const fs = require('fs');

// 默认需要处理的所有 Prisma 配置文件（相对于运行脚本的当前目录，通常是 platforms/prisma）
const defaultFiles = [
    'package.json'
];

// 解析命令行参数，例如 --configfile=package.json (忽略大小写)
const args = process.argv.slice(2);
let argConfigFile = null;
for (const arg of args) {
    if (arg.toLowerCase().startsWith('--configfile=')) {
        argConfigFile = arg.split('=')[1];
    }
}

// 允许通过命令行参数或环境变量指定单个文件，否则使用默认列表
const configFiles = argConfigFile ? [argConfigFile] : (process.env.CONFIG_FILE ? [process.env.CONFIG_FILE] : defaultFiles);

let successCount = 0;

for (const configPath of configFiles) {
    let content;
    try {
        content = fs.readFileSync(configPath, 'utf-8');
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.warn(`⚠️ Skipped ${configPath} (File not found)`);
            continue;
        }
        console.error(`❌ Failed to read config file ${configPath}:`, err.message);
        process.exit(1);
    }

    try {
        const isJson = configPath.endsWith('.json');

        console.log(`Updating ${configPath}...`);
        let modified = false;

        if (isJson) {
            let pkg = JSON.parse(content);

            // 允许注入动态的 APP NAME
            const appName = process.env.PRISMA_APP_NAME;
            if (appName) {
                pkg.name = appName;
                console.log(`- Updated package.json name to: ${appName}`);
            }

            delete pkg.main;
            if (pkg.scripts) {
                delete pkg.scripts.start;
                delete pkg.scripts.build;
            }

            // 保留便捷部署命令
            if (!pkg.scripts) pkg.scripts = {};
            pkg.scripts.deploy = "npx @prisma/cli@3.0.0-beta.30 app deploy --prod --yes";

            // 移除 hono 依赖，以防止 Prisma CLI 错误激活 Hono/Bun 的预设构建设定
            if (pkg.dependencies && pkg.dependencies.hono) {
                delete pkg.dependencies.hono;
            }

            // 添加 compute-sdk 的 devDependencies 解决 IDE 提示找不到类型的问题
            if (!pkg.devDependencies) pkg.devDependencies = {};
            pkg.devDependencies["@prisma/compute-sdk"] = "^0.34.0";

            content = JSON.stringify(pkg, null, 2);
            console.log(`- Updated package.json for Prisma Compute Node.js runtime`);
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(configPath, content);
            console.log(`✅ Successfully saved changes to ${configPath}`);
            successCount++;
        } else {
            console.log(`ℹ️ No changes needed for ${configPath}`);
        }

    } catch (error) {
        console.error(`❌ Failed to parse or write config file ${configPath}:`, error.message);
        process.exit(1);
    }
}

console.log(`\n🎉 Prisma config update completed! (Updated ${successCount} files)`);
