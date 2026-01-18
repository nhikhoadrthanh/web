const BLOG_DATA = [
    {
        id: 1,
        title: "Sốt co giật ở trẻ: Ba mẹ cần bình tĩnh xử lý",
        category: "Bệnh lý",
        image: "https://images.unsplash.com/photo-1632053002236-8c5e93df1a13?auto=format&fit=crop&w=600&q=80",
        desc: "Hướng dẫn sơ cứu nhanh tại nhà khi con bị sốt cao co giật. Những điều tuyệt đối KHÔNG làm.",
        date: "20/01/2026"
    },
    {
        id: 2,
        title: "Thực đơn ăn dặm kiểu Nhật cho bé 6 tháng",
        category: "Ăn dặm",
        image: "https://images.unsplash.com/photo-1596522354195-e8448eb166f5?auto=format&fit=crop&w=600&q=80",
        desc: "Gợi ý 7 ngày thực đơn ăn dặm khởi đầu: Cháo rây, rau củ nghiền giúp bé làm quen vị giác.",
        date: "19/01/2026"
    },
    {
        id: 3,
        title: "Lịch tiêm phòng đầy đủ năm 2026",
        category: "Tiêm chủng",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
        desc: "Cập nhật các mũi tiêm chủng mở rộng và dịch vụ mới nhất ba mẹ không thể bỏ qua.",
        date: "18/01/2026"
    },
    {
        id: 4,
        title: "5 Mẹo giúp bé ngủ xuyên đêm",
        category: "Giấc ngủ",
        image: "https://images.unsplash.com/photo-1505672675380-60d28598716b?auto=format&fit=crop&w=600&q=80",
        desc: "Thiết lập trình tự ngủ (bedtime routine) để con dễ vào giấc và ngủ sâu hơn.",
        date: "17/01/2026"
    },
    {
        id: 5,
        title: "Phân biệt Chàm sữa và Rôm sảy",
        category: "Sơ sinh",
        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80",
        desc: "Cách nhận biết và chăm sóc da cho bé sơ sinh khi thời tiết thay đổi.",
        date: "15/01/2026"
    },
    {
        id: 6,
        title: "Bổ sung Vitamin D3: Bao nhiêu là đủ?",
        category: "Dinh dưỡng",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
        desc: "Liều lượng D3 chuẩn cho bé từ 0-18 tháng tuổi để phòng ngừa còi xương.",
        date: "14/01/2026"
    },
    {
        id: 7,
        title: "Dấu hiệu trẻ bị viêm phổi",
        category: "Bệnh lý",
        image: "https://images.unsplash.com/photo-1584036561566-b938f18469as?auto=format&fit=crop&w=600&q=80",
        desc: "Thở nhanh, rút lõm lồng ngực - Dấu hiệu cảnh báo ba mẹ cần đưa con đi viện ngay.",
        date: "12/01/2026"
    },
    {
        id: 8,
        title: "Kháng sinh: Khi nào thực sự cần?",
        category: "Kiến thức thuốc",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&q=80",
        desc: "Hiểu đúng về kháng sinh để tránh lạm dụng, bảo vệ hệ miễn dịch của trẻ.",
        date: "10/01/2026"
    },
    {
        id: 9,
        title: "Thực phẩm vàng tăng chiều cao",
        category: "Dinh dưỡng",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=600&q=80",
        desc: "Top 10 loại thực phẩm giàu Canxi và Vitamin K2 giúp bé cao lớn.",
        date: "08/01/2026"
    },
    {
        id: 10,
        title: "Xử lý khi trẻ bị hóc dị vật",
        category: "Cấp cứu",
        image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&w=600&q=80",
        desc: "Kỹ thuật Heimlich và vỗ lưng ấn ngực cứu mạng trẻ trong gang tấc.",
        date: "05/01/2026"
    },
    {
        id: 11,
        title: "Mẹo dân gian trị ho có hiệu quả?",
        category: "Thảo dược",
        image: "https://images.unsplash.com/photo-1606913084603-3e7702b01627?auto=format&fit=crop&w=600&q=80",
        desc: "Lê chưng đường phèn, quất mật ong - Khi nào dùng được và lưu ý an toàn.",
        date: "03/01/2026"
    },
    {
        id: 12,
        title: "Review các loại bỉm cho da nhạy cảm",
        category: "Review",
        image: "https://images.unsplash.com/photo-1616782506161-12c82306d1dc?auto=format&fit=crop&w=600&q=80",
        desc: "So sánh độ thấm hút và độ mềm mại của các dòng bỉm hot nhất 2026.",
        date: "01/01/2026"
    },
    {
        id: 13,
        title: "Tắm nắng cho trẻ: Lợi hay hại?",
        category: "Sơ sinh",
        image: "https://images.unsplash.com/photo-1532490389938-2856e3f1560a?auto=format&fit=crop&w=600&q=80",
        desc: "Quan điểm y khoa mới nhất về việc tắm nắng và bổ sung D3.",
        date: "28/12/2025"
    },
    {
        id: 14,
        title: "Hiểu về tuần khủng hoảng (Wonder Weeks)",
        category: "Tâm lý",
        image: "https://images.unsplash.com/photo-1510337550647-e84f83e341ca?auto=format&fit=crop&w=600&q=80",
        desc: "Tại sao con bỗng dưng quấy khóc, bám mẹ? Lịch các tuần Wonder Weeks.",
        date: "25/12/2025"
    },
    {
        id: 15,
        title: "Dấu hiệu trẻ chậm nói",
        category: "Phát triển",
        image: "https://images.unsplash.com/photo-1544126566-47a748c8a78e?auto=format&fit=crop&w=600&q=80",
        desc: "Các mốc ngôn ngữ quan trọng 0-3 tuổi và khi nào cần can thiệp.",
        date: "22/12/2025"
    },
    {
        id: 16,
        title: "Cách massage giảm táo bón cho bé",
        category: "Tiêu hóa",
        image: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&w=600&q=80",
        desc: "Bài massage bụng 'I Love U' giúp bé đi tiêu dễ dàng hơn.",
        date: "20/12/2025"
    },
    {
        id: 17,
        title: "Chuẩn bị đồ đi sinh cho mẹ bầu",
        category: "Mẹ Bầu",
        image: "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?auto=format&fit=crop&w=600&q=80",
        desc: "Checklist giỏ đồ đi sinh đầy đủ, gọn nhẹ, không mang thừa.",
        date: "18/12/2025"
    },
    {
        id: 18,
        title: "Vàng da sơ sinh: Sinh lý hay bệnh lý?",
        category: "Sơ sinh",
        image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=600&q=80",
        desc: "Cách quan sát mức độ vàng da và thời điểm cần chiếu đèn.",
        date: "15/12/2025"
    },
    {
        id: 19,
        title: "Men vi sinh: Dùng sao cho đúng?",
        category: "Tiêu hóa",
        image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&w=600&q=80",
        desc: "Phân biệt men vi sinh và men tiêu hóa. Lưu ý cách uống để lợi khuẩn sống.",
        date: "12/12/2025"
    },
    {
        id: 20,
        title: "Sách tranh ehon cho bé 0-1 tuổi",
        category: "Giáo dục",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        desc: "Top 5 bộ sách ehon kích thích thị giác và trí tưởng tượng cho bé.",
        date: "10/12/2025"
    }
];
