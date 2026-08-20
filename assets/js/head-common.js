(function () {

    const head = document.head;

    if (!head) {
        return;
    }


    /* =========================================================
       Favicon
    ========================================================= */

    const faviconLinks = [

        {
            rel: "icon",
            href: "/assets/images/favicon.ico"
        },

        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/assets/images/favicon-32.png"
        },

        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/assets/images/favicon-16.png"
        },

        {
            rel: "icon",
            type: "image/png",
            sizes: "192x192",
            href: "/assets/images/favicon-192.png"
        },

        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/assets/images/apple-touch-icon.png"
        },

        {
            rel: "manifest",
            href: "/site.webmanifest"
        }

    ];


    faviconLinks.forEach(
        function (item) {

            const link =
                document.createElement(
                    "link"
                );


            Object.keys(item).forEach(
                function (key) {

                    link.setAttribute(
                        key,
                        item[key]
                    );

                }
            );


            head.appendChild(
                link
            );

        }
    );

})();