import {
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  where,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const AddUserData = (id, name, email, phone) => {
  setDoc(doc(db, "users", id), {
    name: name,
    email: email,
    phone: phone,
  })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

export { AddUserData };

const readData = (e) => {
  const [userNames, setUserNames] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      setUserNames(snapshot.docs.map((doc) => doc.data()));
    });
    return unsubscribe;
  }, []);

  for (var i = 0; i < userNames.length; i++) {
    if (userNames[i].email.toLowerCase() == e.toLowerCase()) {
      return userNames[i].name;
    }
  }
};

export { readData };

const AddProjectData = (
  id,
  name,
  type,
  startDate,
  endDate,
  members,
  creator
) => {
  setDoc(doc(db, "projects", id), {
    id: id,
    name: name,
    type: type,
    startDate: startDate,
    endDate: endDate,
    members: members,
    createdBy: creator,
  })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

export { AddProjectData };

const readProjectData = (e) => {
  const [projectList, setProjectList] = useState([]);
  const list = [];
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
      setProjectList(snapshot.docs.map((doc) => doc.data()));
    });
    return unsubscribe;
  }, []);

  for (var i = 0; i < projectList.length; i++) {
    list.push({
      name: projectList[i].name,
      creator: projectList[i].createdBy,
      id: projectList[i].id,
      type: projectList[i].type,
      startDate: projectList[i].startDate,
      endDate: projectList[i].endDate,
      members: projectList[i].members,
    });
  }
  return list;
};
export { readProjectData };

const AddTaskData = (
  id,
  name,
  type,
  projectName,
  memberName,
  memberEmail,
  startDate,
  endDate
) => {
  setDoc(doc(db, "tasks", id), {
    id: id,
    name: name,
    type: type,
    projectName: projectName,
    memberName: memberName,
    memberEmail: memberEmail,
    startDate: startDate,
    endDate: endDate,
  })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

export { AddTaskData };

const readProjectTasks = (pName) => {
  const [taskList, setTaskList] = useState([]);
  const list = [];
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      setTaskList(snapshot.docs.map((doc) => doc.data()));
    });
    return unsubscribe;
  }, []);

  for (var i = 0; i < taskList.length; i++) {
    if (taskList[i].projectName == pName) {
      list.push({
        name: taskList[i].name,
        id: taskList[i].id,
        type: taskList[i].type,
        startDate: taskList[i].startDate,
        endDate: taskList[i].endDate,
        projectName: taskList[i].projectName,
        memberName: taskList[i].memberName,
        memberEmail: taskList[i].memberEmail,
        status: taskList[i].status,
        comments: taskList[i].comments,
        hoursWorked: taskList[i].hoursWorked,
      });
    }
  }
  return list;
};

export { readProjectTasks };

const readUserTasks = (user) => {
  const [usersTaskList, setUSersTaskList] = useState([]);
  const list = [];
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      setUSersTaskList(snapshot.docs.map((doc) => doc.data()));
    });
    return unsubscribe;
  }, []);

  for (var i = 0; i < usersTaskList.length; i++) {
    if (usersTaskList[i].memberEmail.toLowerCase() === user.toLowerCase()) {
      list.push({
        name: usersTaskList[i].name,
        id: usersTaskList[i].id,
        type: usersTaskList[i].type,
        startDate: usersTaskList[i].startDate,
        endDate: usersTaskList[i].endDate,
        projectName: usersTaskList[i].projectName,
        memberName: usersTaskList[i].memberName,
        memberEmail: usersTaskList[i].memberEmail,
        hoursWorked: usersTaskList[i].hoursWorked,
        status: usersTaskList[i].status,
        comments: usersTaskList[i].comments,
      });
    }
  }
  return list;
};

export { readUserTasks };

const editTasks = (id, startDate, endDate, hoursWorked, status, comments) => {
  updateDoc(doc(db, "tasks", id), {
    hoursWorked: hoursWorked,
    status: status,
    comments: comments,
    startDate: startDate,
    endDate: endDate,
  })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

export { editTasks };

const getUser = (user) => {
  const [userData, setUserData] = useState([]);
  const u = {};
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      setUserData(snapshot.docs.map((doc) => doc.data()));
    });
    return unsubscribe;
  }, []);

  for (var i = 0; i < userData.length; i++) {
    if (userData[i].email.toLowerCase() === user.toLowerCase()) {
      u.name = userData[i].name;
      u.email = userData[i].email;
      u.phone = userData[i].phone;
    }
  }
  return u;
};

export { getUser };

const getMembers = (user) => {
  const [memberList, setMemberList] = useState([]);
  var membersL = [];
  var x = [];
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
      setMemberList(snapshot.docs.map((doc) => doc.data()));
    });
    return unsubscribe;
  }, []);

  for (var i = 0; i < memberList.length; i++) {
    if (memberList[i].createdBy == user) {
      membersL.push(memberList[i].members);
    }
    for (var j = 0; j < membersL.length; j++) {
      console.log(membersL[j].name);
      // x.push({ name: membersL[j].name, email: membersL[j].email });
    }
    console.log(x);
  }
  // for (var i = 0; i < membersL.length; i++) {
  //   var x = membersL[i];
  //   for (var j = 0; j < x.length; i++) {
  //     members.push(x[j]);
  //   }
  // }
  // console.log(members);

  return x;
};

export { getMembers };
