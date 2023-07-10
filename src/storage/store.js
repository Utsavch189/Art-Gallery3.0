import { Web3Storage } from 'web3.storage'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEM4NzI0YTVkNTk1Yzg5QUU3MkZlNWNhMjEzMDY5MjQxNEY4NjBhRjEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzc2NzkwMDk5NTgsIm5hbWUiOiJoaSJ9.Ce1fzpmjM5TkBekp1F6EU09UJqe4sPNgu5dqWJvYhuE'

const client = new Web3Storage({ token })

const isStoredSuccessFully = async(data) => {
    const res = await client.get(data.ipfsHash)
    const files = await res.files()
    for (const file of files) {
        if (file) {
            return true;
        } else {
            return false;
        }
    }
}

export const UploadFile = async(file) => {
    //const file=e.target.files[0]
    const newFile = new File([file], file.name, { type: file.type })
    const cid = await client.put([newFile])
    const data = {
            "ipfsHash": cid,
            "fileName": file.name
        }
        //console.log(await isStoredSuccessFully(data))
    if (await isStoredSuccessFully(data)) {
        return `https://${data.ipfsHash}.ipfs.dweb.link/${data.fileName}`
    }
}