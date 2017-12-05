npm install redux react-redux react-router-dom --save
npm install redux-thunk --save

callback funtion 
.then => goi len server va server phan  hoi thanh cong

Asyn Action là một action chưa sẵn sàng ngày khi gọi nó

redux-thunk trì hoãn việc dispatch ( fetch dữ liệu xong mới dispatch)

Middleware cấu trúc ứng dụng phân chia thành các lợp khác nhau, Lớp người dùng đi qua các lớp middleware này. Nhận nhiệm vụ kiểm tra dữ liêu, quyên, check Authenticate

Log, report, 

Lớp năm giữ reducers và dispatch action

Vị trí hoạt động là trước khi reducers nhận được action
và sau khi action nhận được dispatch

Redux-thunk
Redux-saga
Redux-observable
Redux-promise
