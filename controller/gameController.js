const Express = require("express");
const router = Express.Router();
//const validateJWT = require("../middleware/validate-jwt");
const {GameModel} = require('../models');
/*
router.post("/", validateJWT,async(req, res) =>{ 
    const { game, maker, info} = req.body.game
    console.log('gamepost', req.body.game )
    res.send('post called' , game, maker, info)
    
    //console.log('myreq', req)
    const gameEntry = {
    game,
    maker,
    info,
    
    }
    try {
    const newGame = await GameModel.create(GameEntry);
    res. status(200).json(newGame);
    } catch (err) {
    res.status(500).json({ error: err });
    }
    GameModel.create(GameEntry)
    });
    
router.get("/", async(req, res) =>{
    //res.send("log get called")

    try {   
        const entries = await GameModel.findAll();
        console.log('entries', entries)
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({ error: err });
        }
    });
    
router.get('/:id', async(req, res) =>{
        //res.status(200).send("log get by id called "+ req.params.id )
        const { id} = req.params;
        try {
        const results = await GameModel.findAll({
            where: { id: id }
            });
            res.status(200).json(info);
        } catch (err) {
            res.status(500).json({ error: err });
            }
        });

router.put("/:id",validateJWT, async(req, res) =>{
        //res.send("log put by id called " + req.params.id )
        const {game, maker, info } = req.body.log;
        const gameId = req.params.id;
        const userId = req.user.id;
       // console.log('updategame', req.body, req.params, req.user)
        const query = {
        where: {
        id: gameId,
        user_id: userId
        }
        };
        
        const updatedGame = {
            game: game,
            gamemaker: maker,
            gameInfo: info
        };
        
        try {
        
        const update = await GameModel.update(updatedGame, query);
        res.status(200).json(update);
        } catch (err) {
        res.status(500).json({ error: err });
        }

}); gamename,
info,
maker

router.delete("/:id",validateJWT, async(req, res) =>{
        //res.send("log delete by id called " + req.params.id)
        const ownerId = req.user.id;
        const logId = req.params.id;
        try {
        const query = {
            where: {
                id: logId,
                owner_id: ownerId
            }
            };
            await LogModel.destroy(query);
            res.status(200).json({ message: "Log Entry Removed" });
            } catch (err) {
            res.status(500).json({ error: err });
            }
        });  
        */     


module.exports = router;
