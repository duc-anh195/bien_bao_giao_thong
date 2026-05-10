'use strict';

const embeddedData = {
  categories: [
    {
      id: "bien-cam", name: "Biển báo cấm", code: "P", color: "#C62828", lightColor: "#FFEBEE", description: "Biểu thị các điều cấm mà người tham gia giao thông không được vi phạm.",
      signs: [
        { code: "P.101", name: "Đường cấm", meaning: "Cấm tất cả các loại phương tiện đi lại cả hai hướng." },
        { code: "P.102", name: "Cấm đi ngược chiều", meaning: "Cấm tất cả các loại xe đi vào theo chiều đặt biển." },
        { code: "P.103a", name: "Cấm xe ô tô", meaning: "Cấm các loại xe cơ giới kể cả xe máy 3 bánh có thùng đi qua." },
        { code: "P.103b", name: "Cấm xe ô tô rẽ phải", meaning: "Cấm các loại xe cơ giới rẽ phải." },
        { code: "P.103c", name: "Cấm xe ô tô rẽ trái", meaning: "Cấm các loại xe cơ giới rẽ trái." },
        { code: "P.104", name: "Cấm mô tô", meaning: "Cấm các loại xe mô tô và gắn máy đi qua." },
        { code: "P.105", name: "Cấm xe ô tô và mô tô", meaning: "Cấm xe ô tô và mô tô đi qua." },
        { code: "P.106a", name: "Cấm xe tải", meaning: "Cấm các loại xe tải có trọng tải từ 1,5 tấn trở lên." },
        { code: "P.106b", name: "Cấm xe tải có trọng lượng lớn", meaning: "Cấm xe tải có khối lượng chuyên chở vượt mức ghi trên biển." },
        { code: "P.106c", name: "Cấm xe chở hàng nguy hiểm", meaning: "Cấm các xe chở hàng nguy hiểm đi qua." },
        { code: "P.107", name: "Cấm xe ô tô khách và xe ô tô tải", meaning: "Cấm ô tô chở khách và các loại ô tô tải." },
        { code: "P.107a", name: "Cấm xe ô tô khách", meaning: "Cấm ô tô khách đi qua." },
        { code: "P.107b", name: "Cấm xe ô tô taxi", meaning: "Cấm xe ô tô taxi đi qua." },
        { code: "P.108", name: "Cấm xe kéo rơ-moóc", meaning: "Cấm các loại xe cơ giới kéo theo rơ-moóc." },
        { code: "P.108a", name: "Cấm sơ-mi rơ-moóc", meaning: "Cấm xe kéo sơ-mi rơ-moóc." },
        { code: "P.109", name: "Cấm máy kéo", meaning: "Cấm tất cả các loại máy kéo." },
        { code: "P.110a", name: "Cấm xe đạp", meaning: "Cấm xe đạp đi qua." },
        { code: "P.110b", name: "Cấm xe đạp thồ", meaning: "Cấm xe đạp thồ đi qua." },
        { code: "P.111a", name: "Cấm xe gắn máy", meaning: "Cấm xe gắn máy đi qua." },
        { code: "P.111b", name: "Cấm xe ba bánh loại có động cơ", meaning: "Cấm xe ba bánh có động cơ (xe lam, xích lô máy)." },
        { code: "P.111c", name: "Cấm xe ba bánh loại không động cơ", meaning: "Cấm xe ba bánh không động cơ (xích lô)." },
        { code: "P.111d", name: "Cấm người đi bộ", meaning: "Cấm người đi bộ đi qua." },
        { code: "P.112", name: "Cấm xe súc vật kéo", meaning: "Cấm xe súc vật kéo đi qua." },
        { code: "P.113", name: "Hạn chế trọng lượng xe", meaning: "Cấm các loại xe có tổng trọng lượng vượt quá trị số ghi trên biển." },
        { code: "P.114", name: "Hạn chế trọng lượng trên trục xe", meaning: "Cấm các xe có trọng lượng phân bổ trên một trục bất kỳ vượt quá trị số trên biển." },
        { code: "P.115", name: "Hạn chế chiều rộng", meaning: "Cấm các xe có chiều rộng vượt quá trị số ghi trên biển." },
        { code: "P.116", name: "Hạn chế chiều cao", meaning: "Cấm các xe có chiều cao vượt quá trị số ghi trên biển." },
        { code: "P.117", name: "Hạn chế chiều dài", meaning: "Cấm các xe có chiều dài vượt quá trị số ghi trên biển." },
        { code: "P.118", name: "Hạn chế chiều dài tổ hợp xe", meaning: "Cấm các xe kéo rơ-moóc có tổng chiều dài vượt quá trị số." },
        { code: "P.119", name: "Hạn chế khoảng cách", meaning: "Cấm xe cơ giới chạy nối đuôi với khoảng cách ngắn hơn trị số trên biển." },
        { code: "P.120", name: "Cấm rẽ trái và quay đầu", meaning: "Cấm xe rẽ trái và quay đầu xe." },
        { code: "P.121a", name: "Cấm rẽ phải và quay đầu", meaning: "Cấm xe rẽ phải và quay đầu xe." },
        { code: "P.123a", name: "Cấm rẽ trái", meaning: "Cấm các phương tiện rẽ trái." },
        { code: "P.123b", name: "Cấm rẽ phải", meaning: "Cấm các phương tiện rẽ phải." },
        { code: "P.124a", name: "Cấm quay đầu xe", meaning: "Cấm các loại xe quay đầu." },
        { code: "P.124b", name: "Cấm ô tô quay đầu xe", meaning: "Cấm riêng ô tô quay đầu." },
        { code: "P.125", name: "Cấm vượt", meaning: "Cấm các loại xe cơ giới vượt nhau." },
        { code: "P.126", name: "Cấm ô tô tải vượt", meaning: "Cấm các loại ô tô tải vượt xe khác." },
        { code: "P.127", name: "Tốc độ tối đa cho phép", meaning: "Cấm các phương tiện chạy quá tốc độ trên biển." },
        { code: "P.128", name: "Cấm bóp còi", meaning: "Cấm các xe sử dụng còi." },
        { code: "P.130", name: "Cấm dừng xe và đỗ xe", meaning: "Cấm các phương tiện dừng và đỗ xe." },
        { code: "P.131a", name: "Cấm đỗ xe", meaning: "Cấm đỗ xe." },
        { code: "P.131b", name: "Cấm đỗ xe ngày lẻ", meaning: "Cấm đỗ xe vào các ngày lẻ." },
        { code: "P.131c", name: "Cấm đỗ xe ngày chẵn", meaning: "Cấm đỗ xe vào các ngày chẵn." }
      ]
    },
    {
      id: "bien-nguy-hiem", name: "Biển báo nguy hiểm", code: "W", color: "#E65100", lightColor: "#FFF3E0", description: "Cảnh báo các tình huống nguy hiểm trên đường.",
      signs: [
        { code: "W.201a", name: "Chỗ ngoặt nguy hiểm vòng bên trái", meaning: "Báo trước sắp đến một chỗ ngoặt nguy hiểm vòng sang trái." },
        { code: "W.201b", name: "Chỗ ngoặt nguy hiểm vòng bên phải", meaning: "Báo trước sắp đến một chỗ ngoặt nguy hiểm vòng sang phải." },
        { code: "W.202a", name: "Nhiều chỗ ngoặt nguy hiểm liên tiếp (trái trước)", meaning: "Báo trước có nhiều chỗ ngoặt liên tiếp, ngoặt trái trước." },
        { code: "W.202b", name: "Nhiều chỗ ngoặt nguy hiểm liên tiếp (phải trước)", meaning: "Báo trước có nhiều chỗ ngoặt liên tiếp, ngoặt phải trước." },
        { code: "W.203a", name: "Đường hẹp cả hai bên", meaning: "Đoạn đường bị hẹp đột ngột ở cả hai bên." },
        { code: "W.203b", name: "Đường hẹp bên trái", meaning: "Đoạn đường bị hẹp đột ngột phía bên trái." },
        { code: "W.203c", name: "Đường hẹp bên phải", meaning: "Đoạn đường bị hẹp đột ngột phía bên phải." },
        { code: "W.204", name: "Đường hai chiều", meaning: "Báo trước sắp đến đoạn đường giao thông hai chiều." },
        { code: "W.205a", name: "Đường giao nhau đồng cấp", meaning: "Báo trước giao nhau với đường cùng cấp." },
        { code: "W.205b", name: "Đường giao nhau đồng cấp", meaning: "Báo trước giao nhau với đường cùng cấp." },
        { code: "W.205c", name: "Đường giao nhau đồng cấp", meaning: "Báo trước giao nhau với đường cùng cấp." },
        { code: "W.206", name: "Giao nhau chạy theo vòng xuyến", meaning: "Báo trước nơi giao nhau bố trí đảo an toàn vòng xuyến." },
        { code: "W.207a", name: "Giao nhau với đường không ưu tiên", meaning: "Giao nhau với đường không ưu tiên." },
        { code: "W.207b", name: "Giao nhau với đường không ưu tiên", meaning: "Giao nhau với đường nhánh không ưu tiên bên phải." },
        { code: "W.207c", name: "Giao nhau với đường không ưu tiên", meaning: "Giao nhau với đường nhánh không ưu tiên bên trái." },
        { code: "W.208", name: "Giao nhau với đường ưu tiên", meaning: "Báo trước sắp giao nhau với đường ưu tiên." },
        { code: "W.209", name: "Giao nhau có tín hiệu đèn", meaning: "Báo trước nơi giao nhau có điều khiển bằng tín hiệu đèn." },
        { code: "W.210", name: "Giao nhau với đường sắt có rào chắn", meaning: "Báo trước sắp đến chỗ giao nhau với đường sắt có rào chắn." },
        { code: "W.211a", name: "Giao nhau với đường sắt không có rào chắn", meaning: "Giao nhau với đường sắt không rào chắn." },
        { code: "W.212", name: "Cầu hẹp", meaning: "Báo trước sắp đến cầu hẹp." },
        { code: "W.213", name: "Cầu tạm", meaning: "Báo trước sắp đến cầu tạm." },
        { code: "W.214", name: "Cầu cất", meaning: "Báo trước sắp đến cầu quay, cầu cất." },
        { code: "W.215a", name: "Kè, vực sâu phía trước", meaning: "Báo trước sắp đến đoạn đường có kè, vực sâu." },
        { code: "W.216a", name: "Đường ngầm", meaning: "Báo trước sắp đến đoạn đường ngầm." },
        { code: "W.217", name: "Bến phà", meaning: "Báo trước sắp đến bến phà." },
        { code: "W.218", name: "Cửa chui", meaning: "Báo trước sắp đến đường hầm, cửa chui." },
        { code: "W.219", name: "Dốc xuống nguy hiểm", meaning: "Báo trước đoạn dốc xuống nguy hiểm." },
        { code: "W.220", name: "Dốc lên nguy hiểm", meaning: "Báo trước đoạn dốc lên nguy hiểm." },
        { code: "W.221a", name: "Đường lồi lõm", meaning: "Báo trước đoạn đường mặt lồi lõm, xấu." },
        { code: "W.221b", name: "Gờ giảm tốc", meaning: "Báo trước có đoạn gờ giảm tốc." },
        { code: "W.222a", name: "Đường trơn", meaning: "Báo trước đoạn đường trơn trượt." },
        { code: "W.224", name: "Người đi bộ cắt ngang", meaning: "Báo phần đường dành cho người đi bộ cắt ngang." },
        { code: "W.225", name: "Trẻ em", meaning: "Báo trước đoạn đường thường có trẻ em đi ngang qua." },
        { code: "W.226", name: "Đường người đi xe đạp cắt ngang", meaning: "Báo trước đoạn đường người đi xe đạp hay băng qua." },
        { code: "W.227", name: "Công trường", meaning: "Báo trước đoạn đường đang thi công." },
        { code: "W.228a", name: "Đá lở", meaning: "Báo trước đoạn đường có thể có đá lở." },
        { code: "W.232", name: "Gió ngang", meaning: "Báo trước đoạn đường thường có gió ngang thổi mạnh." },
        { code: "W.245", name: "Đi chậm", meaning: "Nhắc nhở lái xe giảm tốc độ." },
        { code: "W.246a", name: "Chú ý chướng ngại vật (vòng tránh 2 bên)", meaning: "Báo phía trước có chướng ngại vật." },
        { code: "W.246b", name: "Chú ý chướng ngại vật (vòng tránh trái)", meaning: "Báo chướng ngại vật vòng tránh sang trái." },
        { code: "W.246c", name: "Chú ý chướng ngại vật (vòng tránh phải)", meaning: "Báo chướng ngại vật vòng tránh sang phải." }
      ]
    },
    {
      id: "bien-hieu-lenh", name: "Biển hiệu lệnh", code: "R", color: "#0D47A1", lightColor: "#E3F2FD", description: "Ra lệnh cho người tham gia giao thông phải thi hành.",
      signs: [
        { code: "R.122", name: "Dừng lại", meaning: "Buộc các xe phải dừng lại trước biển hoặc vạch kẻ đường." },
        { code: "R.301a", name: "Hướng đi phải theo (chỉ đi thẳng)", meaning: "Các xe chỉ được phép đi thẳng." },
        { code: "R.301b", name: "Hướng đi phải theo (chỉ rẽ phải)", meaning: "Các xe chỉ được phép rẽ phải." },
        { code: "R.301c", name: "Hướng đi phải theo (chỉ rẽ trái)", meaning: "Các xe chỉ được phép rẽ trái." },
        { code: "R.301d", name: "Hướng đi phải theo (chỉ rẽ phải)", meaning: "Các xe chỉ được rẽ phải tại nơi đường giao nhau." },
        { code: "R.301e", name: "Hướng đi phải theo (chỉ rẽ trái)", meaning: "Các xe chỉ được rẽ trái tại nơi đường giao nhau." },
        { code: "R.301f", name: "Hướng đi phải theo (đi thẳng và rẽ phải)", meaning: "Các xe được đi thẳng và rẽ phải." },
        { code: "R.301h", name: "Hướng đi phải theo (đi thẳng và rẽ trái)", meaning: "Các xe được đi thẳng và rẽ trái." },
        { code: "R.302a", name: "Hướng phải đi vòng chướng ngại vật (sang phải)", meaning: "Báo hiệu phải đi vòng sang phải để qua chướng ngại vật." },
        { code: "R.302b", name: "Hướng phải đi vòng chướng ngại vật (sang trái)", meaning: "Báo hiệu phải đi vòng sang trái để qua chướng ngại vật." },
        { code: "R.303", name: "Nơi giao nhau chạy theo vòng xuyến", meaning: "Báo hiệu các xe phải chạy theo vòng xuyến." },
        { code: "R.304", name: "Đường dành cho xe thô sơ", meaning: "Báo hiệu đường dành riêng cho xe thô sơ." },
        { code: "R.305", name: "Đường dành cho người đi bộ", meaning: "Báo hiệu đường dành riêng cho người đi bộ." },
        { code: "R.306", name: "Tốc độ tối thiểu cho phép", meaning: "Báo tốc độ tối thiểu cho phép các xe cơ giới chạy." },
        { code: "R.307", name: "Hết hạn chế tốc độ tối thiểu", meaning: "Báo hết đoạn đường hạn chế tốc độ tối thiểu." },
        { code: "R.403a", name: "Đường dành cho ô tô", meaning: "Báo hiệu bắt đầu đường dành cho xe ô tô." },
        { code: "R.403b", name: "Đường dành cho ô tô, xe máy", meaning: "Báo hiệu đường dành cho ô tô và xe gắn máy." },
        { code: "R.412a", name: "Làn đường dành cho xe khách", meaning: "Báo hiệu làn đường dành riêng cho ô tô khách." },
        { code: "R.412b", name: "Làn đường dành cho xe con", meaning: "Báo hiệu làn đường dành riêng cho xe con." },
        { code: "R.412c", name: "Làn đường dành cho xe tải", meaning: "Báo hiệu làn đường dành riêng cho ô tô tải." },
        { code: "R.412d", name: "Làn đường dành cho xe mô tô", meaning: "Báo hiệu làn đường dành riêng cho mô tô." }
      ]
    },
    {
      id: "bien-chi-dan", name: "Biển chỉ dẫn", code: "I", color: "#1B5E20", lightColor: "#E8F5E9", description: "Cung cấp thông tin hướng dẫn giao thông an toàn và thuận lợi.",
      signs: [
        { code: "I.401", name: "Bắt đầu đường ưu tiên", meaning: "Chỉ dẫn bắt đầu đoạn đường ưu tiên." },
        { code: "I.402", name: "Hết đoạn đường ưu tiên", meaning: "Chỉ dẫn đã hết đoạn đường ưu tiên." },
        { code: "I.405a", name: "Đường cụt", meaning: "Chỉ dẫn đường cụt phía trước." },
        { code: "I.405b", name: "Đường cụt rẽ phải", meaning: "Chỉ dẫn lối rẽ phải là đường cụt." },
        { code: "I.405c", name: "Đường cụt rẽ trái", meaning: "Chỉ dẫn lối rẽ trái là đường cụt." },
        { code: "I.407a", name: "Đường một chiều", meaning: "Chỉ dẫn đoạn đường chạy một chiều." },
        { code: "I.408a", name: "Nơi đỗ xe", meaning: "Chỉ dẫn những nơi được phép đỗ xe." },
        { code: "I.409", name: "Chỗ quay xe", meaning: "Chỉ dẫn khu vực được phép quay đầu xe." },
        { code: "I.410", name: "Khu vực quay xe", meaning: "Chỉ dẫn khu vực quay xe (có thể mô tả bằng vạch kẻ)." },
        { code: "I.413a", name: "Đường phía trước có làn đường dành cho ô tô khách", meaning: "Báo đường phía trước có làn dành riêng cho ô tô khách." },
        { code: "I.414a", name: "Chỉ hướng đường", meaning: "Chỉ hướng đi đến các địa danh." },
        { code: "I.423a", name: "Đường người đi bộ sang ngang", meaning: "Chỉ dẫn vạch kẻ đường dành cho người đi bộ." },
        { code: "I.424a", name: "Cầu vượt qua đường cho người đi bộ", meaning: "Chỉ dẫn cầu vượt cho người đi bộ." },
        { code: "I.424c", name: "Hầm chui qua đường cho người đi bộ", meaning: "Chỉ dẫn hầm chui cho người đi bộ." },
        { code: "I.425", name: "Bệnh viện", meaning: "Chỉ dẫn cơ sở y tế gần nhất." },
        { code: "I.426", name: "Trạm cấp cứu", meaning: "Chỉ dẫn trạm sơ cứu y tế." },
        { code: "I.427", name: "Trạm sửa chữa", meaning: "Chỉ dẫn nơi sửa chữa xe cơ giới." },
        { code: "I.428", name: "Cửa hàng xăng dầu", meaning: "Chỉ dẫn trạm cung cấp nhiên liệu." },
        { code: "I.429", name: "Nơi rửa xe", meaning: "Chỉ dẫn điểm rửa xe." },
        { code: "I.430", name: "Điện thoại", meaning: "Chỉ dẫn nơi có điện thoại công cộng." },
        { code: "I.431", name: "Trạm dừng nghỉ", meaning: "Chỉ dẫn trạm dừng chân trên đường." },
        { code: "I.432", name: "Khách sạn", meaning: "Chỉ dẫn khách sạn, nhà nghỉ." },
        { code: "I.433", name: "Nơi ăn uống", meaning: "Chỉ dẫn điểm phục vụ ăn uống." },
        { code: "I.434", name: "Bến xe buýt", meaning: "Chỉ điểm đỗ, đón trả khách của xe buýt." },
        { code: "I.439", name: "Tên cầu", meaning: "Chỉ dẫn tên chiếc cầu đi qua." },
        { code: "I.440", name: "Đoạn đường thi công", meaning: "Chỉ dẫn đoạn đường đang có công trình." }
      ]
    },
    {
      id: "bien-phu", name: "Biển phụ", code: "S", color: "#4A148C", lightColor: "#F3E5F5", description: "Bổ sung, thuyết minh chi tiết cho các biển báo chính.",
      signs: [
        { code: "S.501", name: "Phạm vi tác dụng của biển", meaning: "Báo khoảng cách từ biển đến nơi bắt đầu hiệu lực." },
        { code: "S.502", name: "Khoảng cách đến đối tượng báo hiệu", meaning: "Báo khoảng cách thực tế đến đối tượng." },
        { code: "S.503a", name: "Hướng tác dụng của biển", meaning: "Chỉ hướng tác dụng của biển chính (vuông góc)." },
        { code: "S.503b", name: "Hướng tác dụng của biển", meaning: "Chỉ hướng tác dụng của biển (song song)." },
        { code: "S.504", name: "Làn đường", meaning: "Chỉ biển chính áp dụng riêng cho một làn đường." },
        { code: "S.505a", name: "Loại xe", meaning: "Chỉ biển chính áp dụng cho loại xe nhất định." },
        { code: "S.506a", name: "Hướng đường ưu tiên", meaning: "Chỉ dẫn rẽ nhánh đường ưu tiên." },
        { code: "S.507", name: "Hướng rẽ", meaning: "Chỉ hướng rẽ nguy hiểm phía trước." },
        { code: "S.508", name: "Thời gian", meaning: "Quy định khung giờ áp dụng của biển chính." },
        { code: "S.509", name: "Thuyết minh biển chính", meaning: "Dùng để viết thêm ghi chú bổ sung cho biển." }
      ]
    }
  ]
};

const State = { currentView: 'home', currentCatId: null, searchQuery: '', listFilter: '', listSortByCode: true, visibleCount: 30, CHUNK: 30 };
const $ = id => document.getElementById(id);

// --- LOGIC HÌNH ẢNH LOCAL ---
// Hệ thống tự động lấy file ảnh trong thư mục "assets/images/" dựa trên code của biển
function getImageUrl(code) {
  return `./assets/images/${code}.png`; 
}

function init() {
  renderHome();
  bindEvents();
}

function showView(view) {
  State.currentView = view;
  ['view-home', 'view-list', 'view-search'].forEach(id => { $(id).classList.toggle('active', id === `view-${view}`); });
  let bc = $('header-breadcrumb'), cat = State.currentCatId ? embeddedData.categories.find(c => c.id === State.currentCatId) : null;
  if (view === 'home') bc.innerHTML = `<span>Trang chủ</span>`;
  else if (view === 'search') bc.innerHTML = `<span class="bc-home" onclick="goHome()">Trang chủ</span> <span class="bc-current">› Tìm kiếm</span>`;
  else if (cat) bc.innerHTML = `<span class="bc-home" onclick="goHome()">Trang chủ</span> <span class="bc-current">› ${cat.name}</span>`;
}

function renderHome() {
  let grid = $('category-grid'), total = embeddedData.categories.reduce((s, c) => s + c.signs.length, 0);
  $('stat-total').innerHTML = `${total}<span>+</span>`;
  grid.innerHTML = embeddedData.categories.map(cat => `
    <div class="category-card" style="--cat-color:${cat.color};--cat-light:${cat.lightColor}" onclick="openCategory('${cat.id}')">
      <div class="card-top">
        <div class="card-icon-ring">${cat.code}</div>
        <div><div class="card-name">${cat.name}</div><div class="card-desc">${cat.description.split('.')[0]}</div></div>
      </div>
      <div class="card-bottom">${cat.signs.length} biển báo</div>
    </div>`).join('');
}

function openCategory(id) {
  State.currentCatId = id; State.listFilter = ''; State.visibleCount = State.CHUNK; $('list-search-input').value = '';
  let cat = embeddedData.categories.find(c => c.id === id);
  $('cat-header-card').innerHTML = `
    <div class="cat-header-icon" style="background:${cat.lightColor};color:${cat.color}">${cat.code}</div>
    <div><div class="cat-header-code" style="color:${cat.color}">Nhóm ${cat.code}</div>
    <div class="cat-header-name" style="color:${cat.color}">${cat.name}</div></div>`;
  document.querySelectorAll('.sort-btn').forEach(b => b.style.setProperty('--cat-color', cat.color));
  renderSigns(cat); showView('list'); window.scrollTo(0,0);
}

function renderSigns(cat) {
  let grid = $('signs-grid'), signs = [...cat.signs];
  if (State.listFilter) {
    let q = State.listFilter.toLowerCase();
    signs = signs.filter(s => s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q));
  }
  signs.sort((a,b) => State.listSortByCode ? a.code.localeCompare(b.code, undefined, {numeric:true}) : a.name.localeCompare(b.name, 'vi'));
  
  $('signs-count').textContent = `${signs.length} biển`;
  let visible = signs.slice(0, State.visibleCount);
  
  // Render HTML với cơ chế Fallback ảnh tự động
  grid.innerHTML = visible.map(s => `
    <div class="sign-card" style="--cat-color:${cat.color};--cat-light:${cat.lightColor}" onclick="openSignModal('${s.code}','${cat.id}')">
      <div class="sign-img-wrap">
        <img src="${getImageUrl(s.code)}" alt="${s.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <div class="img-fallback">${cat.code}</div>
      </div>
      <div class="sign-body">
        <div class="sign-code-badge">${s.code}</div>
        <div class="sign-name">${s.name}</div>
        <div class="sign-snippet">${s.meaning}</div>
      </div>
    </div>`).join('');
    
  $('view-more-wrap').style.display = signs.length > State.visibleCount ? 'block' : 'none';
}

function openSignModal(code, catId) {
  let cat = embeddedData.categories.find(c => c.id === catId), sign = cat.signs.find(s => s.code === code);
  $('modal-top').style.background = cat.lightColor;
  $('modal-top').innerHTML = `
    <div class="modal-close-x" onclick="closeModal()">✕</div>
    <img class="modal-sign-img" src="${getImageUrl(sign.code)}" onerror="this.style.display='none'">
    <div class="modal-code-pill" style="color:${cat.color}">${sign.code}</div>`;
  $('modal-body').innerHTML = `
    <div class="modal-sign-name">${sign.name}</div>
    <div style="font-weight:600;color:gray;margin-bottom:12px;font-size:13px">${cat.name}</div>
    <div class="modal-meaning-box" style="--cat-color:${cat.color}">${sign.meaning}</div>`;
  $('modal-overlay').classList.add('open');
}

function closeModal() { $('modal-overlay').classList.remove('open'); }

function performSearch(q) {
  State.searchQuery = q.trim().toLowerCase();
  if (!State.searchQuery) return goHome();
  let results = embeddedData.categories.map(cat => ({
    cat, signs: cat.signs.filter(s => s.name.toLowerCase().includes(State.searchQuery) || s.code.toLowerCase().includes(State.searchQuery))
  })).filter(r => r.signs.length > 0);
  
  $('search-result-count').textContent = `${results.reduce((s,r)=>s+r.signs.length,0)} kết quả`;
  $('search-empty').style.display = results.length ? 'none' : 'block';
  $('search-grid').innerHTML = results.map(r => `
    <div class="search-result-group">
      <div class="search-group-label" style="color:${r.cat.color}">${r.cat.name} (${r.signs.length})</div>
      <div class="signs-grid">${r.signs.map(s => `
        <div class="sign-card" style="--cat-color:${r.cat.color};--cat-light:${r.cat.lightColor}" onclick="openSignModal('${s.code}','${r.cat.id}')">
          <div class="sign-img-wrap">
            <img src="${getImageUrl(s.code)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <div class="img-fallback">${r.cat.code}</div>
          </div>
          <div class="sign-body">
            <div class="sign-code-badge">${s.code}</div>
            <div class="sign-name">${s.name}</div>
            <div class="sign-snippet">${s.meaning}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>`).join('');
  showView('search'); window.scrollTo(0,0);
}

function goHome() { State.currentCatId = null; $('header-search-input').value=''; showView('home'); window.scrollTo(0,0); }

function bindEvents() {
  let debounce = (f,ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(()=>f(...a),ms) }};
  $('header-search-input').addEventListener('input', debounce(e => performSearch(e.target.value), 300));
  $('list-search-input').addEventListener('input', debounce(e => { State.listFilter = e.target.value; renderSigns(embeddedData.categories.find(c=>c.id===State.currentCatId)); }, 200));
  $('sort-code').onclick = function() { State.listSortByCode=true; this.classList.add('active'); $('sort-name').classList.remove('active'); renderSigns(embeddedData.categories.find(c=>c.id===State.currentCatId)); };
  $('sort-name').onclick = function() { State.listSortByCode=false; this.classList.add('active'); $('sort-code').classList.remove('active'); renderSigns(embeddedData.categories.find(c=>c.id===State.currentCatId)); };
  $('back-btn').onclick = goHome;
  $('view-more-btn').onclick = () => { State.visibleCount += State.CHUNK; renderSigns(embeddedData.categories.find(c=>c.id===State.currentCatId)); };
}

document.addEventListener('DOMContentLoaded', init);