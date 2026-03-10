export const trabajadores = [
    { id: 1, nombre: "Juan Pérez", cargo: "Maestro", pago: 40000 },
    { id: 2, nombre: "Pedro Soto", cargo: "Ayudante", pago: 30000 },
    { id: 3, nombre: "Diego Rojas", cargo: "Maestro", pago: 45000 },
];

export const empresas = [
    { id: 1, nombre: "Empresa 1", rut: "12345678-9" },
    { id: 2, nombre: "Empresa 2", rut: "12345678-9" },
    { id: 3, nombre: "Empresa 3", rut: "12345678-9" },
];

export const obras = [
    { id: 1, nombre: "Edificio Centro", empresaId: 1 },
    { id: 2, nombre: "Remodelación Mall", empresaId: 2 },
    { id: 3, nombre: "Casa Particular", empresaId: 3 },
];

export const asignaciones = [
    { id: 1, trabajadorId: 1, obraId: 1, fecha: "2026-03-10" },
    { id: 2, trabajadorId: 2, obraId: 1, fecha: "2026-03-10" },
    { id: 3, trabajadorId: 3, obraId: 2, fecha: "2026-03-10" },
];