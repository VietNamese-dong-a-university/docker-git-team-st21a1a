import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

// Kiểu tùy chỉnh cho metric để tránh lỗi TypeScript
type ReportHandler = (metric: any) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Gọi các hàm Web Vitals trực tiếp
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
