import { normalizePath, } from "vite";
import { readFileSync } from "node:fs";

export function CustomPagePlugin(config){
    const ejs = require("ejs");
    const color = require("cli-color");
    const pluginName = color.cyan("vite-plugin-cpa");

    const {
        template = "index.html",
        verbose = true,
        pages
    } = config;

    const input = {};
    const entries = [];

    for(let id of Object.keys(pages)){
        let { filename, entry } = pages[id];

        input[id] = filename || `${id}.html`;
        if(entry) entries.push(entry);
    }

    function transform(fileContent, id) {
        // console.log("transform ", id);

        let page = pages[id] || Object.values(pages).find(page => page.filename == id);
        if(!page) return fileContent;

        return ejs.render(
            !page.entry ? fileContent : fileContent.replace(
                /<\/body>/,
                `<script type="module" src="${normalizePath(`${page.entry}`)}"><\/script></body>`
            ),
            page.data
        );
    }

    return {
        name: pluginName,
        config(){
            return {
                appType: "custom",
                clearScreen: false,
                optimizeDeps: { entries }, // html entry를 지정하는듯함
                build: {
                    rollupOptions: { input }
                }
            }
        },

        configResolved(resolvedConfig){
            if(verbose){
                let pretty = (s) => normalizePath(`${color.blue(resolvedConfig.build.outDir)}/${color.green(s)}`);
                let files = Object.values(input).map(pretty);
                console.log(`[${pluginName}] generated virtual files: ${files.join(" ")}`);
            }
        },

        // 이제 건들지마
        resolveId(id, importer, options) {
            for(let name in input){
                if(input[name] == id) return id;
            }
        },

        // content file 리턴
        load(id) {
            // console.log("load ", id);

            let page = pages[id] || Object.values(pages).find(page => page.filename == id);
            if(page && page.template){
                return readFileSync(page.template, "utf-8");
            }

            // if(id == "index" || id == "index.html"){
            //     return readFileSync("public/index.html", "utf-8");
            // }
            // if(id == "console" || id == "console.html"){
            //     return readFileSync("public/console.html", "utf-8");
            // }
            return null;
        },
        transform,
        configureServer(server) {
            const {
                middlewares,
                pluginContainer,
                transformIndexHtml
            } = server;

            console.log(`[${pluginName}] install cpa middleware`);

            middlewares.use(async (req, res, next) => {
                const accept = req.headers.accept;
                const base = normalizePath(`/${server.config.base || "/"}/`);
                const url = req.url;

                // 미들웨어 로그
                // console.log("middleware url ", url);

                // if(verbose && req.originalUrl !== url) {
                //     console.log(
                //         `[${pluginName}]: Rewriting ${color.blue(req.originalUrl)} to ${color.blue(rewritten)}`
                //     );
                // }

                let id = url.replace(base, '').split('/').shift();
                let page = pages[id] || pages["index"];

                // console.log((accept.includes("*/*") && !accept.includes("text/html")));
                // console.log((0 <= url.indexOf(".html") && accept.includes("text/html")));

                if (res.writableEnded || !accept || (accept.includes("*/*") && !accept.includes("text/html")) || (0 <= url.indexOf(".html") && accept.includes("text/html"))) {
                    return next();
                }

                // console.log("page.filename", page?.filename);

                if (page && page.filename) {
                    res.end(
                        await transformIndexHtml(
                            url,
                            transform(
                                await pluginContainer.load(page.filename),
                                page.filename
                            ),
                            // await pluginContainer.load(filename),
                            req.originalUrl
                        )
                    );

                    return;
                }

                // if(url == "/console"){

                //     res.end(
                //         await transformIndexHtml(
                //             url,
                //             transform(
                //                 await pluginContainer.load(filename),
                //                 filename
                //             ),
                //             // await pluginContainer.load(filename),
                //             req.originalUrl
                //         )
                //     );

                //     return;
                // }

                // else if(url == "/"){
                //     res.end(
                //         await transformIndexHtml(
                //             url,
                //             transform(
                //                 await pluginContainer.load("index.html"),
                //                 "index.html"
                //             ),
                //             // await pluginContainer.load("index.html"),
                //             req.originalUrl
                //         )
                //     );

                //     return;

                // }

                next();
            });
        }
    }
}

export async function PagesPlugin(options){
    const color = require("cli-color");
    const pluginName = color.cyan("vite-plugin-pages");
    const vitePluginPages = require("vite-plugin-pages").default;

    console.log(`[${pluginName}] install page plugin`);

    return {
        name: pluginName,

        ...vitePluginPages({ moduleId: "~/routes", ...options }),
    };
}

export {
    CustomPagePlugin as cpa,
    PagesPlugin as pages,
};