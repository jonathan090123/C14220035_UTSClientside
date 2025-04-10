import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing) {
            onEdit(todo.id, editText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <li style={{ marginBottom: '1rem' }}>
            <div onClick={() => onToggle(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {isEditing ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        style={{ marginBottom: '0.5rem' }}
                    />
                ) : (
                    <span>{todo.text}</span>
                )}
            </div>
            <div className="todo-actions">
                <button className="btn-edit" onClick={handleEdit}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
                <button className="btn-delete" onClick={() => onDelete(todo.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
