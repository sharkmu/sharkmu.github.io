mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

pub fn greet() {
    alert("Hello, v2!");
}

pub fn hello_world() {
    alert("Hello, World!");
}

#[wasm_bindgen]
pub fn main() {
    greet();
    hello_world();
}