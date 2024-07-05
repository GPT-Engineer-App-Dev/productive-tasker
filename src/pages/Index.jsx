import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Calendar, Flag } from "lucide-react";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", dueDate: "", priority: "" });

  const addTask = () => {
    if (newTask.title.trim() !== "") {
      setTasks([...tasks, { ...newTask, completed: false }]);
      setNewTask({ title: "", dueDate: "", priority: "" });
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  return (
    <div className="p-4 space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Inbox</h1>
        <Button onClick={addTask}>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </header>
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <Card key={index} className="flex items-center space-x-4 p-2">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTaskCompletion(index)}
            />
            <div className="flex-1">
              <CardHeader>
                <CardTitle className={task.completed ? "line-through" : ""}>
                  {task.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex space-x-2">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{task.dueDate}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Flag className="h-4 w-4" />
                  <span>{task.priority}</span>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex space-x-2">
        <Input
          name="title"
          placeholder="Task title"
          value={newTask.title}
          onChange={handleInputChange}
        />
        <Input
          name="dueDate"
          placeholder="Due date"
          value={newTask.dueDate}
          onChange={handleInputChange}
        />
        <Input
          name="priority"
          placeholder="Priority"
          value={newTask.priority}
          onChange={handleInputChange}
        />
        <Button onClick={addTask}>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default Index;