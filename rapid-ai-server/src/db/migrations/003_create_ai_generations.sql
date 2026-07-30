CREATE TABLE ai_generations (
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
    prompt TEXT,

    result TEXT,

    status VARCHAR(20)
        DEFAULT 'success'
        CHECK (
            status IN (
                'success',
                'failed'
            )
        ),

    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_generations_user_created
ON ai_generations(user_id, created_at DESC);