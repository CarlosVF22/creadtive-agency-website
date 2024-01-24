module.exports = {
    async headers() {
        return [
            {
                source: "/api/product", // ajusta esto según la ruta de tu API
                headers: [
                    {
                        key: "Cache-Control",
                        value: "no-cache, no-store, must-revalidate", // ajusta esto según tus necesidades de cache
                    },
                ],
            },
        ];
    },
};
