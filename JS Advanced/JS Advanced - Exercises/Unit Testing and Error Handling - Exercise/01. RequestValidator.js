function requestValidator(obj) {
    const methodValidate = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versionValidate = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriPattern = /[^A-Za-z0-9\.\*]+/;
    let messagePattern = /[<>\\\&\'\"]+/;
 
    if ((obj.method === undefined) || !(methodValidate.includes(obj.method))) {
        throw new Error ('Invalid request header: Invalid Method');
    };
    if ((obj.uri === undefined) || obj.uri == '' || uriPattern.test(obj.uri)) {
        throw new Error ('Invalid request header: Invalid URI');
    };
    if ((obj.version === undefined) || !(versionValidate.includes(obj.version))) {
        throw new Error ('Invalid request header: Invalid Version');
    }
    if ((obj.message === undefined) || ((messagePattern.test(obj.message)) == true)) {
        throw new Error ('Invalid request header: Invalid Message');
    }
  return obj;
}