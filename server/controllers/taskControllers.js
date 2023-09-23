const Task = require("../models/taskModel");

// ... Create A Task ...
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log(task);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// .... Get All Tasks ...
const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find();
    console.log(task);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// ... Get a task

const getATask = async (req,res) =>{
    try {
      const {id} = req.params
        const task = await Task.findById(id);
        if(!task){
          return res.status(404).json(`task with id : ${id} does not exists`)
        }
        res.status(200).json(task);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
}

// .... Delete A Task ....

const deteteAtask = async (req,res) => {
  try {
    const {id} = req.params
    console.log("ID",id,"PARAMS ID")
    const task = await Task.findByIdAndDelete(id)
    if(!task){
      return res.status(404).json(`Not task with Id : ${id}`)
    }
    res.status(200).json(`A task is Deleted with is : ${id}`)
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}


// Update a task

const updateATask = async (req,res) =>{
  try {
    const {id} = req.params
    const task = await Task.findByIdAndUpdate({_id : id},req.body,{new:true,runValidators : true})
  res.status(200).json(task)
  } catch (error) {
    res.status(500).json({msg:error.message})
  }
}

module.exports = {
  createTask,
  getAllTasks,
  getATask,
  deteteAtask,
  updateATask
};
