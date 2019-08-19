module.exports = {
    publicPath: process.env.NETLIFY === 'true' ? '/' :
        process.env.NODE_ENV === 'production' ? '/my-personal-web/'
            : '/'
}
