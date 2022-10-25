import account from '_locales/vi/account'
import homePage from '_locales/vi/homePage'
import productPage from './productPage'
import recoveryPassword from './recoveryPassword'
import contact from './contact'
import productFeature from './productFeature'
import services from './services'
import topEnterprise from './topEnterprise'
import response from './response'
import getInTouch from './getInTouch'
import slider from './slider'
import news from './news'
import feelings from './feelings'
import quotes from './quotes'

const vi = {
    translation: {
        ...account,
        ...homePage,
        ...productPage,
        ...recoveryPassword,
        ...contact,
        ...productFeature,
        ...services,
        ...topEnterprise,
        ...response,
        ...getInTouch,
        ...slider,
        ...news,
        ...feelings,
        ...quotes,
        // ... import more split file
        'app.button.agree': 'Đồng ý',
    },
    common: {
        title: {
            homePage: 'Trang chủ',
            notAllowedPage: 'Không cho phép',
            notFoundPage: 'Không tìm thấy',
            productPage: 'Sản phẩm',
            UnSupportPage: 'Không hỗ trợ, vui lòng truy cập trên desktop',
        },
        constants: {
            newCreated: 'Mới tạo',
            verified: 'Đã duyệt',
            shipping: 'Vận chuyển',
            finish: 'Hoàn tất',
            cancel: 'Đã hủy',
            noData: 'Dữ liệu trống',
            active: 'Kích hoạt',
            lock: 'Đã khóa',
            Commune: 'Xã/Phường',
            District: 'Quận/Huyện',
            Province: 'Tỉnh/Thành',
            register: 'Đăng ký ngay',
        },
        toast: {
            showErrorMessage: 'Gặp lỗi. Vui lòng thử lại',
            showSuccessMessage: 'Thành công',
            messageLoading: 'Vui lòng chờ',
            error: 'Lỗi',
            fieldsAreNotFullFilled: 'Vui lòng điền đầy đủ thông tin',
        },
        logout: {
            title: 'Đăng xuất',
            confirm: 'Bạn có chắc muốn đăng xuất?',
        },
        searchPlaceHolder: {
        },
        header: {
            contact: 'Liên hệ tư vấn'
        },
        footer: {
            contact: 'Liên hệ',
        },
        menuDropDown: {
            profile: 'Cập nhật hồ sơ',
            manageAddress: 'Quản lý địa chỉ',
            updatePassword: 'Cập nhật mật khẩu',
            logout: 'Đăng xuất',
            listOrders: 'Đơn hàng của tôi',
            homePage: 'Trang chủ',
            login: 'Đăng nhập',
            register: 'Đăng ký',
        },
        message: {
            invalidPath: 'Đường dẫn không hợp lệ',
        },
        yes: 'Có',
        no: 'Không',
        update: 'Cập nhật',
        delete: 'Xóa',
        login: 'Đăng nhập',
        signup: 'Đăng ký',
        error: 'Lỗi',
        success: 'Thành công',
        edit: 'Chỉnh sửa',
        create: 'Tạo',
        add: 'Thêm',
        note: 'Ghi chú',
        accept: 'Đồng ý',
        newCreated: 'Mới tạo',
        verified: 'Đã xác nhận',
        shipping: 'Vận chuyển',
        finish: 'Hoàn tất',
        cancel: 'Đã hủy',
        cancelAction: 'Hủy',
        ok: 'OK',
        back: 'Trở về',
    },
    basicModal: {
        close: 'Đóng',
        saveButton: 'Lưu',
    },
    baseField: {
        select: 'chọn',
        enter: 'nhập',
        requiredMsg: 'Vui lòng {{ action, lowercase }} {{ fieldTitle, lowercase }}',
        imageTooLarge: 'Hình tải lên cần nhỏ hơn 500KB!',
    },
    fileUploadField: {
        clickToUpload: 'Nhấp vào để tải lên',
    },
    cropImageFiled: {
        uploading: 'Đang tải lên',
        upload: 'Tải lên',
    },
    richTextField: {
        limitFileSize: 'Dung lượng hình cần phải nhỏ hơn 512KB. Vui lòng tải lên dung lượng nhỏ hơn!',
    },
    textField: {
        maxLengthMsg: 'Số ký tự không thể nhiều hơn {{ var }}',
        minLengthMsg: 'Số ký tự không thể ít hơn {{ var }}',
        invalidEmailMsg: 'Định dạng email không hợp lệ',
    },
    constants: {
        Male: 'Nam',
        Female: 'Nữ',
    },
    searchForm: {
        searchButton: 'Tìm kiếm',
        clearButton: 'Làm mới',
    },
    navigationBar: {
        Home: 'Trang chủ',
        Function: 'Nội dung khóa học',
        Services: 'Khóa học',
        Customer: 'Doanh nghiệp',
        Review: 'Đánh giá',
        News: 'Tin tức',
        Contact: 'Liên hệ',
    }
}

export default vi
