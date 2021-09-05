const Express = require("express");
const router = Express.Router();
const validateJWT = require("../middleware/validate-jwt");
const { GameModel } = require("../models")

router.post('/game', validateJWT, async (req, res)=> {
    const user_id = req.user.id
    console.log(req.user);
    const {gameName, maker, info} = req.body.game
    GameModel.create({
        gameName,
         maker,
          info,
          user_id
        })
        .then(game => res.status(201).json({message: 'new game ', game}))
        .catch(err => res.status(500).json({message: 'something went wrong at /game', err}))
})

router.get('/all', async (req, res) => {

    try {
        const results = await GameModel.findAll();
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.put("/:id", validateJWT, async(req, res) =>{
    //res.send("log put by id called " + req.params.id )
    const {gameName, maker, info } = req.body.game;
    const gameId = req.params.id;
    const userId = req.user.id;
   // console.log('updatworklog', req.body, req.params, req.user)
    const query = {
    where: {
    id: gameId,
    user_id: userId
    }
    };
    const updatedGame = {
        gameName: gameName,
        maker: maker,
        info: info
    };
    try {
    const update = await GameModel.update(updatedGame, query);
    res.status(200).json(update);
    } catch (err) {
    res.status(500).json({ error: err });
}

}); 

router.delete("/:id", validateJWT, async(req, res) =>{
    //res.send("log delete by id called " + req.params.id)
    // const userId = req.user.id;
    const game = req.params.id;
    try {
    const query = {
        where: {
            // user_Id: userId,
            id: game
        }
        };
        await GameModel.destroy(query);
        res.status(200).json({ message: " game Removed" });
        } catch (err) {
        res.status(500).json({ error: err });
        }
    });       



module.exports = router;
