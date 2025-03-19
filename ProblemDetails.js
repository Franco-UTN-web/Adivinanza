/**
 * Detalle de los errores devueltos por un servicio.
 */
export class ProblemDetails extends Error {

    /**
     * @param {number} status
     * @param {Headers} headers
     * @param {string} title
     * @param {string} [type]
     * @param {string} [detail]
     */
    constructor(status, headers = new Headers(), title = "Error", type = "about:blank", detail = "No hay detalles disponibles.") {
     super(title || "Error") // Evita pasar undefined a Error
     /**
      * @readonly
      */
     this.status = status
     /**
      * @readonly
      */
     this.headers = headers instanceof Headers ? headers : new Headers(headers)
     /**
      * @readonly
      */
     this.type = type
     /**
      * @readonly
      */
     this.detail = detail
     /**
      * @readonly
      */
     this.title = title
    }
   
   }
   