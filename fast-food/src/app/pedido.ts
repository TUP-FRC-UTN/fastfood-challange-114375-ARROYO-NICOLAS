export class Pedido {
    number: number= Math.floor(Math.random() * 1000) + 1; // Numero de pedido random de 1 a 1000
    name: string= "";  // Nombre del cliente
    description: string= "";  // Descripción del pedido
    date: string= new Date().toLocaleDateString('es-ES'); // Fecha de creación del pedido
}
