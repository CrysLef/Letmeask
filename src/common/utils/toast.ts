import toast from "react-hot-toast"

const notifyEmptyQuestion = () => toast('Please, type your question!',{
  icon: '😃',
  style: {
      fontSize: '1.6rem',
  }
})

const notifyLogin = () => toast('You must be logged In!',{
  icon: '😤',
  style: {
      fontSize: '1.6rem',
  }
})

const notifyRoomName = () => toast('Enter the room name',{
  icon: '😊',
  style: {
    fontSize: '1.6rem'
  }
})

const notifyError = () => toast.error('This room does not exist',{
  style: {
      fontSize: '1.6rem',
  }
})
const notifyClosedRoom = () => toast('This room already closed.',{
  icon: '😢',
  style: {
      fontSize: '1.6rem',
  }
})


export {
  notifyEmptyQuestion,
  notifyLogin,
  notifyRoomName,
  notifyError,
  notifyClosedRoom
}