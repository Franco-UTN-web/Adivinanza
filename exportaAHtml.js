/**
 * Permite que los eventos de html usen la función.
 * @param {function} functionInstance
 */
export function exportaAHtml(functionInstance) {
    const functionName = nombreDeFuncionParaHtml(functionInstance);
    if (functionName) {
     window[functionName] = functionInstance;
    } else {
     console.error("No se pudo exportar la función a window: nombre no válido.");
    }
   }
   
   /**
    * @param {function} valor
    */
   export function nombreDeFuncionParaHtml(valor) {
    const names = valor.name.trim().split(/\s+/g);
    return names.length > 0 ? names[names.length - 1] : null;
   }
   