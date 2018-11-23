(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{185:function(e,t,r){"use strict";r.r(t);var s=r(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("ul",[e._m(2),e._v(" "),e._m(3),e._v(" "),r("li",[r("code",[e._v("fetchPolicy")]),e._v(": See "),r("a",{attrs:{href:"https://www.apollographql.com/docs/react/basics/queries.html#graphql-config-options-fetchPolicy",target:"_blank",rel:"noopener noreferrer"}},[e._v("apollo fetchPolicy"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("pollInterval")]),e._v(": See "),r("a",{attrs:{href:"https://www.apollographql.com/docs/react/basics/queries.html#graphql-config-options-pollInterval",target:"_blank",rel:"noopener noreferrer"}},[e._v("apollo pollInterval"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("notifyOnNetworkStatusChange")]),e._v(": See "),r("a",{attrs:{href:"https://www.apollographql.com/docs/react/basics/queries.html#graphql-config-options-notifyOnNetworkStatusChange",target:"_blank",rel:"noopener noreferrer"}},[e._v("apollo notifyOnNetworkStatusChange"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("context")]),e._v(": See "),r("a",{attrs:{href:"https://www.apollographql.com/docs/react/basics/queries.html#graphql-config-options-context",target:"_blank",rel:"noopener noreferrer"}},[e._v("apollo context"),r("OutboundLink")],1)]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9)]),e._v(" "),e._m(10),e._v(" "),r("ul",[r("li",[r("code",[e._v("result")]),e._v(": Apollo Query result\n"),r("ul",[e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),r("li",[r("code",[e._v("result.networkStatus")]),e._v(": See "),r("a",{attrs:{href:"https://www.apollographql.com/docs/react/basics/queries.html#graphql-query-data-networkStatus",target:"_blank",rel:"noopener noreferrer"}},[e._v("apollo networkStatus"),r("OutboundLink")],1)])])]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17)]),e._v(" "),e._m(18),e._v(" "),e._m(19)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"apolloquery-component"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apolloquery-component","aria-hidden":"true"}},[this._v("#")]),this._v(" ApolloQuery component")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("#")]),this._v(" Props")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("query")]),this._v(": GraphQL query (transformed by "),t("code",[this._v("graphql-tag")]),this._v(")")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("variables")]),this._v(": Object of GraphQL variables")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("skip")]),this._v(": Boolean disabling query fetching")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("clientId")]),this._v(": Used to resolve the Apollo Client used (defined in ApolloProvider)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("deep")]),this._v(": Boolean to use deep Vue watchers")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("tag")]),this._v(": String HTML tag name (default: "),t("code",[this._v("div")]),this._v("); if "),t("code",[this._v("undefined")]),this._v(", the component will be renderless (the content won't be wrapped in a tag)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("debounce")]),this._v(": Number of milliseconds for debouncing refetches (for example when the variables are changed)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("throttle")]),this._v(": Number of milliseconds for throttling refetches (for example when the variables are changed)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"scoped-slot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scoped-slot","aria-hidden":"true"}},[this._v("#")]),this._v(" Scoped slot")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("result.data")]),this._v(": Data returned by the query")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("result.loading")]),this._v(": Boolean indicating that a request is in flight")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("result.error")]),this._v(": Eventual error for the current result")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("query")]),this._v(": Smart Query associated with the component")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("isLoading")]),this._v(": Smart Query loading state")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("gqlError")]),this._v(": first GraphQL error if any")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("times")]),this._v(": number of times the result was updated")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("result(resultObject)")])]),this._v(" "),t("li",[t("code",[this._v("error(errorObject)")])])])}],!1,null,null,null);i.options.__file="apollo-query.md";t.default=i.exports}}]);