import { SubmitKey } from "../store/app";
import type { LocaleType } from "./index";

const vi: LocaleType = {
  WIP: "WIP...",
  Error: {
    Unauthorized:
      "Truy cập trái phép, vui lòng nhập mã truy cập vào trang cài đặt.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} Tin Nhắn`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} tin nhắn với ChatGPT`,
    Actions: {
      ChatList: "Đi tới danh sách trò chuyện",
      CompressedHistory: "Lời nhắc bộ nhớ lịch sử nén",
      Export: "Xuất tất cả tin nhắn dưới dạng Markdown",
      Copy: "Sao chép",
      Stop: "Dừng",
      Retry: "Thử lại",
      Delete: "Xóa",
    },
    Rename: "Đổi tên Chat",
    Typing: "Đang nhập...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} để gửi`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter để gửi";
      }
      return inputHints + ", / để tìm kiếm lời nhắc";
    },
    Send: "Gửi",
  },
  Export: {
    Title: "Tất cả tin nhắn",
    Copy: "Sao chép tất cả",
    Download: "Tải xuống",
    MessageFromYou: "Tin nhắn từ bạn",
    MessageFromChatGPT: "Tin nhắn từ ChatGPT",
  },
  Memory: {
    Title: "Lời nhắc bộ nhớ",
    EmptyContent: "Chưa có gì.",
    Send: "Gửi Memory",
    Copy: "Sao chép Memory",
    Reset: "Đặt lại phiên",
    ResetConfirm:
      "Đặt lại sẽ xóa lịch sử hội thoại hiện tại và bộ nhớ lịch sử. Bạn có chắc chắn muốn đặt lại không?",
  },
  Home: {
    NewChat: "Đoạn chat mới",
    DeleteChat: "Xác nhận xóa cuộc trò chuyện đã chọn?",
    DeleteToast: "Cuộc trò chuyện đã xóa",
    Revert: "Trở lại",
  },
  Settings: {
    Title: "Cài đặt",
    SubTitle: "Tất cả cài đặt",
    Actions: {
      ClearAll: "Xóa tất cả dữ liệu",
      ResetAll: "Đặt lại tất cả cài đặt",
      Close: "Đóng",
      ConfirmResetAll: {
        Confirm: "Bạn có chắc chắn muốn thiết lập lại tất cả các cấu hình?",
      },
      ConfirmClearAll: {
        Confirm: "Bạn có chắc chắn muốn đặt lại tất cả các cuộc trò chuyện không?",
      },
    },
    Lang: {
      Name: "Ngôn ngữ", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      Options: {
        cn: "简体中文",
        en: "English",
        tw: "繁體中文",
        es: "Español",
        it: "Italiano",
        tr: "Türkçe",
        jp: "日本語",
        de: "Deutsch",
        vi: "Tiếng Việt",
      },
    },
    Avatar: "Ảnh đại diện",
    FontSize: {
      Title: "Font chữ",
      SubTitle: "Điều chỉnh kích thước phông chữ của nội dung trò chuyện",
    },
    Update: {
      Version: (x: string) => `Phiên bản: ${x}`,
      IsLatest: "Phiên bản mới nhất",
      CheckUpdate: "Kiểm tra Cập nhật",
      IsChecking: "Kiểm tra cập nhật...",
      FoundUpdate: (x: string) => `Tìm thấy phiên bản mới: ${x}`,
      GoToUpdate: "Cập Nhật",
    },
    SendKey: "Gửi khóa",
    Theme: "Theme",
    TightBorder: "Biên giới chặt chẽ",
    SendPreviewBubble: "Gửi bong bóng xem trước",
    Prompt: {
      Disable: {
        Title: "Tắt tính năng tự động hoàn thành",
        SubTitle: "Đầu vào / để kích hoạt tự động hoàn thành",
      },
      List: "Danh sách nhắc nhở",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      Edit: "Chỉnh sửa",
      Modal: {
        Title: "Danh sách nhắc nhở",
        Add: "Thêm một",
        Search: "Lời nhắc tìm kiếm",
      },
    },
    HistoryCount: {
      Title: "Số lượng tin nhắn đính kèm",
      SubTitle: "Số lượng tin nhắn đã gửi được đính kèm theo mỗi yêu cầu",
    },
    CompressThreshold: {
      Title: "Ngưỡng nén lịch sử",
      SubTitle:
        "Sẽ nén nếu độ dài tin nhắn không nén vượt quá giá trị",
    },
    Token: {
      Title: "API Key",
      SubTitle: "Sử dụng khóa của bạn để bỏ qua giới hạn mã truy cập",
      Placeholder: "Khóa API OpenAI",
    },
    Usage: {
      Title: "Số dư tài khoản",
      SubTitle(used: any, total: any) {
        return `Được sử dụng trong tháng này $${used}, Đăng ký $${total}`;
      },
      IsChecking: "Kiểm tra...",
      Check: "Kiểm tra",
      NoAccess: "Nhập Khóa API để kiểm tra số dư",
    },
    AccessCode: {
      Title: "Mã truy cập",
      SubTitle: "Bật kiểm soát truy cập",
      Placeholder: "Cần mã truy cập",
    },
    Model: "Mẫu",
    Temperature: {
      Title: "Nhiệt độ",
      SubTitle: "Giá trị lớn hơn làm cho đầu ra ngẫu nhiên hơn",
    },
    MaxTokens: {
      Title: "Mã thông báo tối đa",
      SubTitle: "Độ dài tối đa của mã thông báo đầu vào và mã thông báo được tạo",
    },
    PresencePenlty: {
      Title: "Hình phạt hiện diện",
      SubTitle:
        "Giá trị lớn hơn làm tăng khả năng nói về các chủ đề mới",
    },
  },
  Store: {
    DefaultTopic: "Cuộc trò chuyện mới",
    BotHello: "Xin chào! mình là BotGPT được quản lý bởi 5G Siêu Tốc Độ bạn cần mình giúp gì không ạ?",
    Error: "Đã xảy ra sự cố, vui lòng thử lại sau.",
    Prompt: {
      History: (content: string) =>
        "Đây là bản tóm tắt lịch sử trò chuyện giữa AI và người dùng dưới dạng tóm tắt: " +
        content,
      Topic:
        "Vui lòng tạo tiêu đề bốn đến năm từ tóm tắt cuộc trò chuyện của chúng tôi mà không có bất kỳ dấu ngoặc kép, dấu ngoặc kép, dấu chấm, ký hiệu hoặc văn bản bổ sung nào. Loại bỏ dấu ngoặc kép kèm theo.",
      Summarize:
        "Tóm tắt cuộc thảo luận của chúng tôi ngắn gọn trong 200 từ hoặc ít hơn để sử dụng như một lời nhắc cho bối cảnh trong tương lai.",
    },
    ConfirmClearAll: "Xác nhận để xóa tất cả dữ liệu trò chuyện và cài đặt?",
  },
  Copy: {
    Success: "Đã sao chép vào khay nhớ tạm",
    Failed: "Sao chép không thành công, vui lòng cấp quyền truy cập khay nhớ tạm",
  },
  Context: {
    Toast: (x: any) => `Với ${x} lời nhắc ngữ cảnh`,
    Edit: "Lời nhắc theo ngữ cảnh và bộ nhớ",
    Add: "Thêm một",
  },
};

export default vi;
