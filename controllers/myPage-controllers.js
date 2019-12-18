
class LoginController {
    constructor() {
    }

    myPage = async (req, res) => {
        try {
            res.send(req.user);
        }
        catch (e) {
            res.status(400).send({error: e.message+'mypage'})
        }
    }

}
module.exports = LoginController;
