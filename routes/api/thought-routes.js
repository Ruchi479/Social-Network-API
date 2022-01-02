const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');


// GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:thoughtId
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/<userId>
router.route('/:userId')
.post(addThought);

// /api/thoughts/<thoughtId>/reactions/<reactionId>
router
  .route('/:thoughtId/reactions/')
  .post(addReaction)
  .delete(removeReaction)

// delete /api/thoughts/<thoughtId>/reactions/<reactionId>
router.route('/:thoughtId/reactions/:id')
.delete(removeReaction);


module.exports = router;