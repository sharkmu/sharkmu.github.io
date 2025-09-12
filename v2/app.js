import init, * as wasm from "./pkg/v2.js";

async function app() {
    await init();
    wasm.main();
}
app();