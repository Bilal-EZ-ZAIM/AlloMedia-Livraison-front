import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Gaurd = ({ children }) => {
  // استخراج حالة تسجيل الدخول من الـ state باستخدام useSelector
  const { isLogin } = useSelector((state) => state.auth);

  // إذا لم يكن المستخدم مسجلاً دخوله، يتم توجيهه إلى صفحة تسجيل الدخول
  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  // إذا كان المستخدم مسجلاً دخوله، يتم عرض الصفحة المطلوبة
  return children;
};

export default Gaurd;
