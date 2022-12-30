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
// <h1><code>tinymce-webpack.ts</code> &mdash; imports the TinyMCE editor from NPM packages using webpack</h1>
// Import TinyMCE. Note: I can't get this to compile as a TypeScript file. ???
import tinymce, { RawEditorOptions } from "tinymce";

// Default icons are required for TinyMCE 5.3 or above.
import "tinymce/icons/default/index.js";

// A theme is also required.
import "tinymce/themes/silver/index.js";

// Import the skin to use; use're using an inline editor, so load the inline CSS.
import "tinymce/skins/ui/oxide/skin.css";
import "tinymce/skins/ui/oxide/content.inline.css";

// Without this, TinyMCE produces errors.
import "tinymce/models/dom/index.js";

// Import plugins.
import "tinymce/plugins/advlist/index.js";
import "tinymce/plugins/anchor/index.js";
import "tinymce/plugins/charmap/index.js";
import "tinymce/plugins/code/index.js";
import "tinymce/plugins/directionality/index.js";
import "tinymce/plugins/emoticons/index.js";
import "tinymce/plugins/emoticons/js/emojis.js";
import "tinymce/plugins/emoticons/js/emojiimages.js";
import "tinymce/plugins/help/index.js";
import "tinymce/plugins/image/index.js";
import "tinymce/plugins/link/index.js";
import "tinymce/plugins/lists/index.js";
import "tinymce/plugins/media/index.js";
import "tinymce/plugins/nonbreaking/index.js";
import "tinymce/plugins/pagebreak/index.js";
import "tinymce/plugins/quickbars/index.js";
import "tinymce/plugins/searchreplace/index.js";
import "tinymce/plugins/table/index.js";
import "tinymce/plugins/visualblocks/index.js";
import "tinymce/plugins/visualchars/index.js";

// Import premium plugins.
// NOTE: Download separately and add these to /src/plugins.
/// import './plugins/checklist/plugin';
/// import './plugins/powerpaste/plugin';
/// import './plugins/powerpaste/js/wordimport';

// Initialize TinyMCE.
export function init(
    // Provide editor options; don't set ``plugins`` or ``skin``, since these must be accompanied by the correct imports.
    options
) {
    tinymce.init(
        Object.assign({}, options, {
            plugins:
                "advlist anchor charmap directionality emoticons help image link lists media nonbreaking pagebreak quickbars searchreplace table visualblocks visualchars",
            // The imports above apply the skins; don't try to dynamically load the skin's CSS. However, this still tries to load the default skin.
            skin: false,
        })
    );
}
