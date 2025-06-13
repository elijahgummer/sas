"use client"

interface GetStartedButtonProps {
  onClick?: () => void
  className?: string
}

export function GetStartedButton({ onClick, className = "" }: GetStartedButtonProps) {
  return (
    <button className={`get-started-button ${className}`} onClick={onClick}>
      GET STARTED
      <style jsx>{`
        .get-started-button {
          position: relative;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #3a5070;
          background: #f5f7f9;
          border: none;
          border-radius: 32px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.05),
            0 4px 8px rgba(0, 0, 0, 0.05),
            0 8px 16px rgba(0, 0, 0, 0.05);
        }

        .get-started-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          width: 80%;
          height: 3px;
          background: linear-gradient(to right, #4a90e2, #67b8e3);
          border-radius: 0 0 32px 32px;
        }

        .get-started-button:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.07),
            0 8px 16px rgba(0, 0, 0, 0.07),
            0 16px 32px rgba(0, 0, 0, 0.07);
        }

        .get-started-button:active {
          transform: translateY(1px);
          box-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.05),
            0 2px 4px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </button>
  )
}
