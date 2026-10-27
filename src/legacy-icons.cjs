// Small original, consistent line icons. Inline SVGs ensure no external CDN or font dependency.
const icons={
 medicalcollege:'<path d="M4 20V7l10-4 10 4v13M7 11h3m4 0h3m4 0h1M7 15h3m4 0h3m4 0h1M11 20v-4h6v4"/><path d="M12 4v3m-2-1.5h4"/>',
 medicalhospital:'<path d="M5 21V8h18v13M8 8V4h12v4M13 11v7m-3.5-3.5h7M3 21h22"/>',
 dentalcollege:'<path d="M10 4c-4-2-7 0-7 5 0 4 2 7 3 11 .8 3.2 3.7 2.6 4.3-.2.6-3 1.4-4.9 3.7-4.9 2.2 0 2.9 1.9 3.6 4.9.6 2.8 3.5 3.4 4.3.2 1-4 3-7 3-11 0-5-3-7-7-5-2.5 1.4-4.3 1.4-7 0Z"/>',
 dentalhospital:'<path d="M6 15.5c-1.8-1.5-3-3.6-3-6.5 0-5 4-7 8-5.4 2 .7 3 .7 5 0 4-1.6 8 .4 8 5.4 0 2.9-1.2 5-3 6.5M13 12h6m-3-3v6"/>',
 nursingcollege:'<path d="M14 23s-9-5-9-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 21 12c0 6-7 11-7 11Z"/><path d="M4 6V3h20v3M14 7v5m-2.5-2.5h5"/>',
 learning:'<path d="M3 7.5 14 3l11 4.5L14 12 3 7.5Z"/><path d="M7 10v7c4.5 3 9.5 3 14 0v-7M25 8v9"/>',
 library:'<path d="M4 6v16M10 6v16M17 6v16M24 6v16M3 6h22M3 22h22M7 9v10m6-10v10m7-10v10"/>',
 hospital:'<path d="M5 24V7h18v17M9 7V3h10v4M14 11v8M10 15h8M3 24h22"/>',
 campus:'<path d="M4 24V11l10-8 10 8v13M8 14h4m4 0h4M8 19h4m4 0h4M11 24v-5h6v5"/>',
 welfare:'<path d="M14 24s-10-6-10-13A5 5 0 0 1 14 8a5 5 0 0 1 10 3c0 7-10 13-10 13Z"/><path d="M9 15h3l2-4 2 7 2-3h3"/>',
 community:'<path d="M14 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-9 12v-4a9 9 0 0 1 18 0v4M3 11a3 3 0 1 0 0-6m22 6a3 3 0 1 1 0-6M1 23v-3c0-3 1-5 4-6m22 9v-3c0-3-1-5-4-6"/>'
};
function icon(key,cssClass=''){return `<svg class="${cssClass}" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${icons[key]||icons.learning}</svg>`}
module.exports={icon};
