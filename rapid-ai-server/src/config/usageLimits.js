const usageLimits = {
    free: {
        article_generation: 10,
        title_generation: 20,
        resume_review: 5
    },

    premium: {
        article_generation: Infinity,
        title_generation: Infinity,
        resume_review: Infinity
    }
};

export default usageLimits;