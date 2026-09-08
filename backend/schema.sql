-- 账号表：存储 2FA 凭据
CREATE TABLE IF NOT EXISTS vault (
    id TEXT PRIMARY KEY,
    service TEXT NOT NULL,
    account TEXT NOT NULL,
    category TEXT,
    secret TEXT NOT NULL, -- 加密存储 {encrypted, iv, salt}
    digits INTEGER DEFAULT 6,
    period INTEGER DEFAULT 30,
    type TEXT DEFAULT 'totp',
    algorithm TEXT DEFAULT 'SHA1',
    counter INTEGER DEFAULT 0,
    created_at INTEGER,
    created_by TEXT,
    updated_at INTEGER,
    updated_by TEXT,
    sort_order INTEGER DEFAULT 0,
    deleted_at INTEGER,
    sync_version INTEGER DEFAULT 0,
    extra_data TEXT
);

-- 金库删除墓碑表：存储已被彻底物理删除的账号 ID，用于多端增量对账
CREATE TABLE IF NOT EXISTS vault_tombstone (
    id TEXT PRIMARY KEY,
    purged_at INTEGER NOT NULL
);

-- 云端备份源配置表
CREATE TABLE IF NOT EXISTS backup_providers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL, -- 类型: 'webdav', 's3', 'telegram'
    name TEXT NOT NULL, -- 显示名称
    is_enabled BOOLEAN DEFAULT 1, -- 启用状态
    config TEXT NOT NULL, -- 配置 JSON (敏感字段加密)
    auto_backup BOOLEAN DEFAULT 0, -- 自动备份开关
    auto_backup_password TEXT, -- 自动备份加密密码 (加密存储)
    auto_backup_retain INTEGER DEFAULT 30, -- 自动备份保留份数，0为无限
    last_backup_at INTEGER, -- 最后备份时间戳
    last_backup_status TEXT, -- 状态: 'success' | 'failed'
    created_at INTEGER,
    updated_at INTEGER
);

-- Telegram 备份历史记录表
CREATE TABLE IF NOT EXISTS backup_telegram_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    provider_id INTEGER NOT NULL,
    filename TEXT NOT NULL,
    file_id TEXT NOT NULL,
    message_id INTEGER NOT NULL,
    size INTEGER NOT NULL,
    created_at INTEGER NOT NULL
);

-- Email 备份历史记录表
CREATE TABLE IF NOT EXISTS backup_email_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    provider_id INTEGER NOT NULL,
    filename TEXT NOT NULL,
    recipient TEXT NOT NULL, -- 收件人邮箱地址
    size INTEGER NOT NULL,
    created_at INTEGER NOT NULL
);

-- Passkey 凭证表
CREATE TABLE IF NOT EXISTS auth_passkeys (
    credential_id TEXT PRIMARY KEY, -- 凭证唯一标识
    user_id TEXT NOT NULL, -- 关联用户标识 (Email)
    public_key BLOB NOT NULL, -- 导出的公钥
    counter INTEGER DEFAULT 0, -- 签名计数器
    name TEXT, -- 硬件名称/别名
    transports TEXT, -- 允许的传输方式 (JSON array)
    created_at INTEGER NOT NULL,
    last_used_at INTEGER
);

-- 速率限制表
CREATE TABLE IF NOT EXISTS rate_limits (
    key TEXT PRIMARY KEY, -- 标识符 (如 IP:path 或 Email:path)
    attempts INTEGER DEFAULT 0, -- 已尝试次数
    last_attempt INTEGER, -- 最后尝试时间戳
    expires_at INTEGER -- 锁定过期时间 (如果有)
);

-- 设备会话表 (Auth Sessions)
CREATE TABLE IF NOT EXISTS auth_sessions (
    id TEXT PRIMARY KEY, -- Session UUID
    user_id TEXT NOT NULL, -- 关联用户标识 (Email)
    device_id TEXT, -- 物理设备指纹 (Hardware Fingerprint)
    provider TEXT, -- 登录方式 (github, passkey, web3 etc.)
    device_type TEXT NOT NULL, -- 设备类型/UA
    ip_address TEXT NOT NULL, -- IP 地址
    last_active_at INTEGER NOT NULL, -- 最后活跃时间戳
    created_at INTEGER NOT NULL -- 创建时间戳
);

-- 数据库版本初始化 (元数据表方案)
CREATE TABLE IF NOT EXISTS _schema_metadata (
    key TEXT PRIMARY KEY,
    value TEXT
);