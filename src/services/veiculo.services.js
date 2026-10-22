import { pool } from "../database/db.js";

class veiculosService{
    async getall() {
        const res = await pool.query("SELECT * FROM veiculos")
        return res.rows
    }

    async getById(id) {
        const res = await pool.query(
            "SELECT * FROM veiculos WHERE id = $1",[id]
        );
        return res.rows[0]
   }

    async create({modelo, marca, ano, placa}) {
        const res = await pool.query("INSERT INTO veiculos (modelo,marca,ano,placa) VALUES ($1, $2, $3, $4) RETURNING *", [modelo,marca,ano,placa]);
        return res.rows[0]
    }

    async delete(id) {
        const res = await pool.query("DELETE FROM veiculos WHERE id = $1", [id])
        return {
          message: "Veiculo deletado com sucesso!",
          veiculo: res.rows[0]
        }
    }

    // async updatePut(id, data) {
    //     const res = await pool.query("UPDATE veiculos SET modelo=$2, marca=$3, ano=$4, placa=$5 WHERE id = $1 RETURNING *",
    //         [id, data.modelo, data.marca, data.ano, data.placa])

    //         return {
    //             message: "Veiculo atualizado com sucesso",
    //             veiculo: res.rows[0]
    //         }
    // }

    // async updatePatch(id, campos){
    //     const keys = Object.keys(campos)
    //     if(keys.length === 0){
    //         throw new Error("É necessário informar um campo para ser atualizado");
    //     }

    //     const queryDinamica = keys.map((key, index) => `${key} = $${index + 1}`).join(", ")

    //     const
    // }

    async updateKnex(id, dados) {
const [veiculotualizado] = await knex("veiculos").where({id}).update(dodos).
returning("*")
return {
message: "Veiculo atualizado com sucesso!",
veiculoAtualizado
}
    }
}

export const veiculosServices = new veiculosService()