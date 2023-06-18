import os

paths = [
    './',
    './introduction',
    './tests',
    './tests/event-bus',
    './tests/pinia-store',
    './tests/i18n',
    './projects',
    './projects/coupon'
]

index_path = "../index.html"

if __name__ == '__main__':
    print(index_path)
    with open(index_path, 'r') as index_file:
        index = index_file.read()
        for path in paths:
            if not os.path.exists(path):
                os.makedirs(path)
            print("Created path: " + path)
            with open(path + '/index.html', 'w') as f:
                f.write(index)
                f.close()


