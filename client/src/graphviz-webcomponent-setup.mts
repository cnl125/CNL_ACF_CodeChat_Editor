// <details>
//     <summary>Copyright (C) 2022 Bryan A. Jones.</summary>
//     <p>This file is part of the CodeChat Editor.</p>
//     <p>The CodeChat Editor is free software: you can redistribute it and/or
//         modify it under the terms of the GNU General Public License as
//         published by the Free Software Foundation, either version 3 of the
//         License, or (at your option) any later version.</p>
//     <p>The CodeChat Editor is distributed in the hope that it will be useful,
//         but WITHOUT ANY WARRANTY; without even the implied warranty of
//         MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
//         General Public License for more details.</p>
//     <p>You should have received a copy of the GNU General Public License
//         along with the CodeChat Editor. If not, see <a
//             href="http://www.gnu.org/licenses/">http://www.gnu.org/licenses/</a>.
//     </p>
// </details>
// <h1><code>graphviz-webcomponent-setup.mts</code> &mdash; Configure graphviz
//     webcomponent options</h1>
// <p>Configure the Graphviz web component to load the (large) renderer only
//     when a Graphviz web component is found on a page. See the <a
//         href="https://github.com/prantlf/graphviz-webcomponent#configuration">docs</a>.
// </p>
// <p>Note that this must be in a separate module which is imported before the
//     graphviz webcomponent; see the <a
//         href="https://esbuild.github.io/content-types/#real-esm-imports">ESBuild
//         docs</a>.</p>
(window as any).graphvizWebComponent = {
    rendererUrl: "/static/graphviz-webcomponent/renderer.min.js",
    delayWorkerLoading: true,
};
