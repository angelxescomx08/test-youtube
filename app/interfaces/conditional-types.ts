type Departamento = "contabilidad" | "informatica" | "ventas";

type RolesContabilidad = "contador" | "gerente";
type RolesInformatica = "programador" | "tech lider";
type RolesVentas = "vendedor" | "marketing";

type Roles<T extends Departamento> = T extends "contabilidad"
	? RolesContabilidad
	: T extends "informatica"
		? RolesInformatica
		: RolesVentas;

function getRoles<T extends Departamento>(departamento: T, role: Roles<T>) {
	return `Has elegido a ${role} de ${departamento.toUpperCase()}!`;
}

getRoles("ventas", "marketing");
