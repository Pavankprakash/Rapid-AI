CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,

    clerk_id VARCHAR(255) UNIQUE NOT NULL,

    email VARCHAR(255) UNIQUE NOT NULL,

    plan_type VARCHAR(20)
        DEFAULT 'free'
        CHECK (plan_type IN ('free', 'premium')),

    created_at TIMESTAMPTZ DEFAULT NOW(),

    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_users_clerk_id
ON users(clerk_id);