import { Router } from "express";
import { veiculosServices } from "../services/veiculo.services.js";

export const veiculosRouter = Router();

veiculosRouter.get("/", async (req, res) => {
    try {
        const veiculos = await veiculosServices.getall();
        res.json(veiculos);
    }catch (error) {
    
        console.error (error);
    }
});

veiculosRouter.get("/:id", async (req,res) => {
        const veiculoId = req.params.id
        try{
            const veiculos = await veiculosServices.getById(veiculoId);
            res.json(veiculos);
        }catch(error){
             console.error(error);
             res.status(500).json({ error: "Erro ao buscar veiculos"})
        }
    
});

veiculosRouter.post("/", async (req, res) => {
    try {
        const veiculos = await veiculosServices.create(req.body);
         res.status(201).json(veiculos);
    }catch (error) {
        console.error (error);
    }
});

veiculosRouter.get("/:id", async (req,res) => {
        const veiculoId = req.params.id
        try{
            const veiculos = await veiculosServices.delete(veiculoId);
            res.status(201).json(veiculos);
        }catch(error){
             console.error(error);
             res.status(500).json({ error: "Erro ao deletar veiculos"})
        }
    
});

/*veiculosRouter.put("/:id", async (req, res) => {
    const veiculoId = req.params.id
    try{
        const veiculoAtualizado = await veiculosServices.updatePut(veiculoId, req.body)
        res.status(201).json(veiculoAtualizado)
    } catch (error){
        console.error(error)
        res.status(500).json({ error: "Erro ao atualizar veiculo" })
    }
});*/

veiculosRouter.patch("/:id", async (req, res) => {
    const veiculoId = req.params.id
    try{
        const veiculoAtualizado = await veiculosServices.updatePut(veiculoId, req.body)
        res.status(201).json(veiculoAtualizado)
    } catch (error){
        console.error(error)
        res.status(500).json({ error: "Erro ao atualizar veiculo" })
    }
});