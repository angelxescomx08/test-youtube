type Departamento = "contabilidad" | "informatica" | "ventas";

type RolesContabilidad = "contador" | "gerente";
type RolesInformatica = "programador" | "tech lider";
type RolesVentas = "vendedor" | "marketing";

type Roles<T extends Departamento> = T extends "contabilidad"
	? RolesContabilidad
	: T extends "informatica"
		? RolesInformatica
		: RolesVentas;

function obtenerPermisos<T extends Departamento>(
	departamento: T,
	rol: Roles<T>,
) {
	//implementar lógica de devolver roles
	return {
		puedeEditar: true,
		puedeBorrar: true,
	};
}

obtenerPermisos("ventas", "vendedor");
