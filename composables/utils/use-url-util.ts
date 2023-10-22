export function useUrlUtil(){
    function queryToObject(query: string) {
        /**
         * a=2&b=3&c=4
         * =>
         * {
         *  a: 2,
         *  b: 3,
         *  c: 4,
         * }
         */
        return _chain(_mapValues(_split(query, '&'), (v:any) => _split(v, '=')))
            .keyBy(0)
            .mapValues(1)
            .value();
    }

    function objectToQuery(obj: any) {
        /**
         * {
         *  a: 2,
         *  b: 3,
         *  c: 4,
         * }
         * =>
         * a=2&b=3&c=4
         */
        return _chain(obj)
            .mapValues((v:any, k:string) => `${k}=${v}`)
            .join('&')
            .value();
    }

    function getHost() {
        return window.location.host;
    }


    return {
        queryToObject,
        objectToQuery,
        getHost,


    }
}