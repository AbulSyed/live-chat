import { ref } from "vue"
import { firestoreService } from "../firebase/config"

const getCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = firestoreService.collection(collection).orderBy('createdAt')

  collectionRef.onSnapshot(snap => {
    let results = []
    snap.docs.forEach(doc => {
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
    })
    documents.value = results
    error.value = null
  }, (e) => {
    error.value = e.message
    console.log(error.value)
  })

  return { documents, error }
}

export default getCollection