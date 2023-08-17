import { HashLoader } from "react-spinners"

export default function LoadingSpinner({loading, color, size, speed}) {
    return (
        <>
            <HashLoader
                color={color}
                loading={loading}
                size={size}
                speedMultiplier={speed}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </>
    )
}