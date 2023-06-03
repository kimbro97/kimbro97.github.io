export function CustomPagePlugin(options) {
    return {
        name: 'custom-page-plugin',
        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                if (req.url === '/') {
                    req.url = `/${options.pages.index.filename}`;
                    console.log(req.url)
                } else if (req.url.startsWith('/console')) {
                    req.url = `/${options.pages.console.filename}`;
                    console.log(req.url)
                }
                await next();
            });
        },
    };
}

export {
    CustomPagePlugin as cpa,
};