import React, { ChangeEvent, Dispatch, KeyboardEvent, forwardRef, SetStateAction} from 'react'
import './style.css'

interface Props {
  label: string;
  type: 'text' | 'password';
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  error: boolean;

  icon?: string; // 아이콘은 있을수도 있고 없을수도 있음.
  onButtonClick?: () => void;

  message?: string;

  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

// component : Input Box 컴포넌트
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {

  // properties
  const { label, type, placeholder, value, error, icon, message} = props;
  const { setValue, onButtonClick, onKeyDown } = props;

  // event handler : input 값 변경 이벤트 처리 함수
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);  
  }

  // event handler : input 키 이벤트 처리 함수
  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!onKeyDown) return;
    onKeyDown(event);
  }

  return (
    <div className='inputbox'>
      <div className='inputbox-label'>{label}</div>
      {/* 에러 값에 따라 css 설정을 변경 */}
      <div className={error ? 'inputbox-container' : 'inputbox-container'}>
        {/* 아이디, 비밀번호 등의 다양한 용도로 입력값을 받도록 사용함. */}
        {/* ref : enter 를 눌렀을 때 다음 input으로 넘어가도록 함. */}
        <input ref={ref} type={type} className='input' placeholder={placeholder} value={value}
              onKeyDown={onKeyDownHandler}
              onChange = {onChangeHandler} />
        {onButtonClick !== undefined && (
          <div className='icon-button'>
            {icon !== undefined && (<div className={`icon ${icon}`}></div>)}
          </div>
        )}
      </div>
      {message !== undefined && <div className='inputbox-message'>{message}</div>}
      

    </div>
  )
});

export default InputBox;