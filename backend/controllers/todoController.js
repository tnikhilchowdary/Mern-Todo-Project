import Todo from "../Schema/todoSchema.js";

export const getTodo = async (req, res) => {
    try{
        const todo = await Todo.find({});
        return res.json(todo);
    }
    catch(error){
        console.log("Error Fetching notes", error);
        return res.status(500).json({message:"Error fetching notes"});
    }
}

export const createTodo = async (req, res) => {
  try{
    const {task} = req.body;
    const todo = new Todo({task});
    await todo.save();
    res.status(201).json({
      sucess:true,
      message:"Todo added sucessfully",
      data:todo,
    });
  }
  catch(error){
    console.log("Error adding Note", error);
    return res.status(500).json({message:"Error Fetching Notes"});
  }
}


export const deleteTodo