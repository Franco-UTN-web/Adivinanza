import { consumeJson } from "./consumeJson.js";
import { exportaAHtml } from "./exportaAHtml.js";

/**
 * Envía los datos de la forma a la url usando la codificación
 * multipart/form-data.
 * @param {string} url
 * @param {Event} event
 * @param { "GET" | "POST"| "PUT" | "PATCH" | "DELETE" | "TRACE" | "OPTIONS"
 *  | "CONNECT" | "HEAD" } metodoHttp
 */
export function submitForm(url, event, metodoHttp = "POST") {

 event.preventDefault();

 const form = event.target;

 if (!(form instanceof HTMLFormElement))
  throw new Error("event.target no es un elemento de tipo form.");

 const opciones = {
  method: metodoHttp,
  headers: { "Accept": "application/json, application/problem+json" }
 };

 if (metodoHttp !== "GET") {
  opciones.body = new FormData(form);
 }

 return consumeJson(fetch(url, opciones));
}

exportaAHtml(submitForm);
