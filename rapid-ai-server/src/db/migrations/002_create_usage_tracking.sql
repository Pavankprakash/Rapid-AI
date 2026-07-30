CREATE TABLE usage_tracking (
    id BIGSERIAL PRIMARY KEY,

    user_id BIGINT NOT NULL
        REFERENCES users(id)
        ON DELETE CASCADE,

    feature_type VARCHAR(30) NOT NULL
        CHECK (
            feature_type IN (
                'article_generation',
                'title_generation',
                'resume_review'
            )
        ),

    usage_count INT NOT NULL DEFAULT 0,

    period_month DATE NOT NULL,

    created_at TIMESTAMPTZ DEFAULT NOW(),

    updated_at TIMESTAMPTZ DEFAULT NOW(),

    UNIQUE(user_id, feature_type, period_month)
);

CREATE INDEX idx_usage_user_period
ON usage_tracking(user_id, period_month);