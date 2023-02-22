const AttachmentList = ({fileList}) => {
const backend_url = "http://127.0.0.1:1337"

    return (
        <table className="table table-sm table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {fileList.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td><a href={backend_url + element.file} target="_blank">{element.file.split('/uploads/')[1]}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}

export default AttachmentList;