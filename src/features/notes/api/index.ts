import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../../lib/firebase";
import { v4 as uuidv4 } from "uuid"; // import the uuid library
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createTask = async (): Promise<void> => {
  try {
    const user = auth.currentUser;
    if (user) {
      const newId = uuidv4();
      const docTaskRef = doc(db, "tasks", newId.toString());
      const task: TaskType = {
        id: newId,
        status: "open",
        title: "New Task",
        text: "Enter task details",
        creator: user.uid,
      };
      await setDoc(docTaskRef, task);
    }
  } catch (e) {
    throw e;
  }
};

export const updateTask = async (task: TaskType): Promise<void> => {
  try {
    const user = auth.currentUser;
    if (user) {
      const docTaskRef = doc(db, "tasks", task.id);
      await updateDoc(docTaskRef, {
        title: task.title,
        text: task.text,
        status: task.status,
      });
    }
  } catch (e) {
    throw e;
  }
};

export const deleteTask = async (id: string): Promise<void> => {
  try {
    const user = auth.currentUser;
    if (user) {
      const docTaskRef = doc(db, "tasks", id);
      await deleteDoc(docTaskRef);
    }
  } catch (e) {
    throw e;
  }
};
